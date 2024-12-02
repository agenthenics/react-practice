import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Routes/Navbar';
import AboutUs from './Routes/AboutUs';
import ContactUs from './Routes/ContactUs'
import Erorr404 from './ErrorPages/Erorr404';

const RoutesExample = () => {
  return (    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/"  element={<div></div>} ></Route>
      <Route path="/login"  element={<div>Login page</div>} ></Route>
      <Route path="/AboutUs" element={<AboutUs/>} ></Route>
      <Route path="/ContactUs" element={<ContactUs/>}  ></Route>
      
      <Route path='*' element={<Erorr404/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesExample