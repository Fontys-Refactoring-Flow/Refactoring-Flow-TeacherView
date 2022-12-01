import React from 'react'
import '../Style/Main.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div class="row align-items-start">
      <div className='col'>
          <p className='title'>Go to Assignments</p>
          <Link to='/assignments' className='button'>Assignments Page</Link>
      </div>
      <div className='col'>
          <p className='title'>Go to Classes</p>
          <Link to='/classes' className='button'>Classes Page</Link>
      </div>
      <div className='col'>
          <p className='title'>Go to Progress</p>
          <Link to='/progress' className='button'>Progress Page</Link>
      </div>
      </div>
    </div>
  )
}

export default Home
