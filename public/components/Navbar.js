import React, {useState} from 'react';
import { Link,} from 'react-router-dom';
import {Fabars,Fatimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => { const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    const [color,Setcolor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 100) {
            Setcolor(true)
        } else {
            Setcolor(false)
    }
    window.addEventListener('scroll', changeColor)
        return (
                <div className={color ? 'header header-bg' :'header' }>
               <Link to='/'>< h1>Vex-Oh</h1></Link>
               <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                <Link to='/'>Home</Link>
                </li>
    
               
               <Link to='/About us'>About us</Link>
               <li>
                <Link to='/Contact us'>Contact us</Link>
               </li>
               <li>
                <Link to='/Download'>Download/</Link>
               </li>
              </ul>
              <div className='mobile-app' onClick={handleClick}>
                {click ? (<Fatimes/>) : (<Fabars size={20} style= {{color: '#fff'}}/>)}
               
               </div>
              
               </div>
               )

}

 }   
 export default Navbar