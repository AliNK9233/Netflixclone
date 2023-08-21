import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netlix Logo" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avtar" />
        <ul className='navMenu'>
          <li className='menu'>
            <a href='#'>Home</a>
          </li>
          <li className='menu'>
            <a href='#Home'>TV Shows</a>
          </li>
          <li className='menu'>
            <a href='#'>Movies</a>
          </li>
          <li className='menu'>
            <a href='#'>New & Popular</a>
          </li>
          <li className='menu'>
            <a href='#'>My List</a>
          </li>
          <li className='menu'>
            <a href='#'>Broes by Language</a>
          </li>
        </ul>
    </div>
  )
}

export default NavBar