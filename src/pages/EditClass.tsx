import '../style/Main.css'
import { Link } from 'react-router-dom'

const EditClass = () => {
  return (
    <div className='container'>
      <p className="title">Edit Class</p>
      <div className='container' style={{textAlign:'left',paddingLeft:'0px',paddingRight:'0px'}}>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Nick van Beek</td>
                        <td>n.vanbeek@student.fontys.nl</td>
                        <td><Link to='/editclass' className='button'>Details</Link></td>
                    </tr>
                    <tr>
                        <td scope="row">Rik de Goede</td>
                        <td>r.degoede@student.fontys.nl</td>
                        <td><Link to='/editclass' className='button'>Details</Link></td>
                    </tr>
                    <tr>
                        <td scope="row">Luc van den Acker</td>
                        <td>l.vandenacker@student.fontys.nl</td>
                        <td><Link to='/editclass' className='button'>Details</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <a className='button' style={{float :'left'}}>Add students</a>
    </div>
  )
}

export default EditClass
