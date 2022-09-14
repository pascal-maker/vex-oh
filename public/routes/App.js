import React from 'react';
import {Routes,Route } from 'react-router-dom';
import Download from '../public/routes/download';
import Home from './routes'
import Contact from '../public/routes/contact';
function App() {
return (
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Routes path= '/Download' element={<Download />} />
      <Routes path='/Contact' element={<Contact />} />
    </Routes>
   
)
}
  
    
   
    
  


export default App;
