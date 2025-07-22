import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notFound'>
      <h2>Sorry, this page can not be found</h2>
      <Link to="/"> Back to the Home page...</Link>
    </div>
  )
}

export default NotFound
