import React from 'react';
import { Link } from 'react-router-dom';
import './ContactusStyles.css'

const contact   = () => {
 return (
  < div className="contact us">
    
   <div className = 'card-container'>
    <div className= 'card'>
     <h3> Our details</h3>
     <span className='Contactinformation'></span>
     <p className='ContactNumber'> +32456180134</p>
     <p className='Linkedin'> <a href='https://be.linkedin.com/in/pascal-musabyimana-573b66178'/></p>
     <p className='email'>pascalmusabyimana681@gmail.com</p>
     <Link to='/contact' className='btn'>Book</Link>
   </div>
   <div>
 
   </div>
   </div>
 
   
 </div>
 )
}
  
 
   


