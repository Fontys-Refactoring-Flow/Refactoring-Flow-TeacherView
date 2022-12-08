import {createContext, Dispatch, HTMLAttributes, SetStateAction, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {axiosInstance, axiosInstancePublic} from "../../services/axios.service";
import {AxiosResponse} from "axios";
import {UserAuthType} from "../../types/UserTypes";

type AuthContextType = {
    teacher: UserAuthType | null
    setTeacher?: Dispatch<SetStateAction<UserAuthType | null>>
    login: (name: string, password: string) => Promise<AxiosResponse | void>
    refresh: (refreshToken : string) => Promise<AxiosResponse | void>
    register: (name : string, email : string, password : string) => Promise<AxiosResponse | void>
    logout: () => void
    hasAuth: (auth : string) => boolean
    hasAdminAuth: () => boolean
    hasTeacherAuth: () => boolean
    loading: boolean
}


const AuthContext = createContext<AuthContextType | null>(null)
export default AuthContext

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children} : HTMLAttributes<any>) => {
    const navigate = useNavigate()
    let [teacher, setTeacher] = useState<UserAuthType | null>(null)
    let [loading, setLoading] = useState(true)

    if(localStorage.getItem("teacher") != null && teacher == null) {
        setTeacher(JSON.parse(localStorage.getItem("teacher")!))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(teacher == null) {
                return
            }
            refresh(teacher!.refreshToken).catch()
        }, 300000)

        setLoading(false)
        return () => clearInterval(interval)
    }, [navigate, teacher])

    const hasAdminAuth = () => {
        return hasRole("ADMIN")
    }

    const hasStudentAuth = () => {
        return hasRole("TEACHER")
    }

    const hasRole = (auth: string) => {
        if(teacher === null) return false;
        try {
            const authorities = teacher.authorities
            return authorities.includes("ROLE_" + auth)
        } catch(e) {
            return false
        }
    }

    const login = async (email: string, password: string) => {
        setLoading(true);
        const data = {
            "email": email,
            "password": password
        }

        const formBody = Object.entries(data).map(([key, value]) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&')

        return axiosInstancePublic
            .post('/teacher/login', formBody, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((res) => {
                if(res.data.accessToken) {
                    localStorage.setItem("teacher", JSON.stringify(res.data))
                    setTeacher(res.data)
                }
                setLoading(false)
            })
    }

    const refresh = (refreshToken : string) => {
        setLoading(true);
        return axiosInstancePublic
            .post('refresh', {
                refreshToken
            })
            .then((res) => {
                if (res.data.accessToken && res.data.refreshToken) {
                    if (teacher!.accessToken && teacher!.refreshToken) {
                        teacher!.accessToken = res.data.accessToken
                        teacher!.refreshToken = res.data.refreshToken
                        localStorage.setItem("teacher", JSON.stringify(teacher))
                        setTeacher(teacher)
                    }
                }
                setLoading(false)
            }).catch(() => {
                logout()
                setLoading(false)
            })
    }

    const register = (name : string, email : string, password : string) => {
        setLoading(true);
        const data = {
            "name": name,
            "email": email,
            "password": password
        }

        const formBody = Object.entries(data).map(([key, value]) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&')

        return axiosInstancePublic
            .post('/teacher/register', formBody, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(() => {
                setLoading(false)
            })
    }

    const logout = () => {
        setLoading(true);
        setTeacher(null);
        localStorage.removeItem("teacher")
        setLoading(false);
        return navigate("/login")
    }

    let contextData : AuthContextType = {
        teacher: teacher,
        setTeacher: setTeacher,
        login,
        refresh,
        register,
        logout,
        hasAuth: hasRole,
        hasAdminAuth,
        hasTeacherAuth: hasStudentAuth,
        loading
    }

    axiosInstance.interceptors.request.use(
        async config => {
            const keys = JSON.parse(localStorage.getItem('teacher') || '{}')
            if(!keys.accessToken || !keys.refreshToken) navigate("/login")
            config.headers!.Authorization = `${keys.tokenType} ${keys.accessToken}`
            return config;
        },
        error => {
            Promise.reject(error).catch()
        }
    );

    axiosInstance.interceptors.response.use(async function(response) {
        return response
    }, async function (error) {
        setLoading(true);
        if(error.response === undefined) {
            logout()
            return
        }

        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry && originalRequest.url !== "refresh") {
            originalRequest._retry = true;
            const user = JSON.parse(localStorage.getItem('teacher') || '{}')
            refresh(user.refreshToken).then((token) => {
                originalRequest.headers.Authorization = `${user.tokenType} ${token}`;
                return axiosInstance.request(originalRequest);
            })
        }
        setLoading(false);
        return Promise.reject(error);
    });

    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}