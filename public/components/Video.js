import React from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css'

import vexovideo from '../assets/vexo.mp4'
const  Video= () => {
    return (
      <div className='Videostyles'>
        <video autoPlay loop muted id = 'video'>
            <source src={vexovideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Vexo App</h1>
            <p> First dual-camera swipe app</p>
      <div>
        <Link to='/video' className='btn'>App Launch</Link>
        <Link to='/contact' className='btn btn-light'>About us</Link>
      </div>
      </div>
      </div>
 )
    
}
export default Video