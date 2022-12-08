import '../style/Main.css'
import { Link } from 'react-router-dom'

const Classes = () => { 

  return (
    <div>
        <div className="container">
            <p className='title'>Classes</p>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="button" type="submit">Search</button>
            </form>
        </div>
        <div className='container' style={{textAlign:'left'}}>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Class</th>
                        <th scope="col">Students</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">S0301T</td>
                        <td>22</td>
                        <td><Link to='/editclass' className='button'>Edit</Link></td>
                    </tr>
                    <tr>
                        <td scope="row">S0302T</td>
                        <td>26</td>
                        <td><Link to='/editclass' className='button'>Edit</Link></td>
                    </tr>
                    <tr>
                        <td scope="row">S0601T</td>
                        <td>19</td>
                        <td><Link to='/editclass' className='button'>Edit</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
  )
}

export default Classes
