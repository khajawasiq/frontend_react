import React from 'react'
import './NavBar.scss'
import {images} from '../../constants'
const NavBar = () => {
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
            {['home','about', 'contact', 'work','skills' ].map((item)=>(
                <li className='app__flex p_text' key={`link-${item}`}>
                    <div/>
                        <a href={`#${item}`}>
                           {item}
                        </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar