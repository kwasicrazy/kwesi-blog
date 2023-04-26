import React from 'react'

const Navbar = () => {
  return (
    <div className='Nav'>
        <h2>My Blog</h2>
        <div className='links'>
            <a className="mr-3" href=''>Home</a>
            <a className="mr-3" href=''>About</a>
            <a className="mr-3" href=''>Contact</a>
        </div>
    </div>
  )
}

export default Navbar