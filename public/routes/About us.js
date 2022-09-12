import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactCards from '../components/Contact';
import Vexoimage from '../components/vexoimage';
import { Download } from '../components/Download';

const About   = () => {
  return (
    <div>
        <Navbar/>
        <Vexoimage headings='About Us' text=' Vexo-Oh is a dual camera swipe-app forcing people to show their true selves by not having to stress about which picture to upload since the only picture you can take is a dual-camera picture. '/> 
        <Download/>
        <Footer/>
        <ContactCards/>


        
    </div>
  );
}

export default App;
