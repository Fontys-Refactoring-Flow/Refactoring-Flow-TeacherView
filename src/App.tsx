import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header'
import Assignments from './pages/Assignments'
import Classes from './pages/Classes';
import EditClass from './pages/EditClass';
import AddAssignment from './pages/AddAssignment'
import StudentProgressPage from './pages/StudentProgressPage'
import StudentProgressDetailPage from './pages/StudentProgressDetailPage';
import GitHubCallback from "./components/upload/github/GitHubCallback";
import UploadMethodList from "./components/upload/UploadMethodList";
import LoginPage from "./pages/LoginPage";
import {AuthProvider} from "./components/context/AuthContext";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/assignments' element={<Assignments/>}/>
            <Route path='/classes' element={<Classes/>}/>
            <Route path='/editclass' element={<EditClass/>}/>
            <Route path='/addAssignment' element={<AddAssignment/>}/>
            <Route path='/progress' element={<StudentProgressPage/>}/>
            <Route path='/progressDetail' element={<StudentProgressDetailPage/>}/>
            <Route path='/github/callback' element={<GitHubCallback/>}/>
            <Route path='/upload' element={<UploadMethodList/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
