import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(prev => !prev)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <h1 className='term'>AcademEase</h1>
        </div>
        <ul className={menu ? '' : 'hide-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-280} duration={500}>program</Link></li>
            <li><Link to='about' smooth={true} offset={-186} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt='menu-icon' className='menu-icon' onClick={toggleMenu}></img>
    </nav>
  )
}

export default Navbar