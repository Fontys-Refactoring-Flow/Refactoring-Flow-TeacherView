import { React, useState } from 'react'
import './../Style/Main.css'
import { Link } from 'react-router-dom'

const Classes = () => { 

  return (
    <div>
        <div class="container">
            <p className='title'>Classes</p>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="button" type="submit">Search</button>
            </form>
        </div>
        <div className='container' style={{textAlign:'left'}}>
            <table class="table table-hover">
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
