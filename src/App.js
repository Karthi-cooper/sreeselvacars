 


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../src/Navbar/Nav.jsx';
import Home from '../src/Home/Home.jsx';
import Product from '../src/Product/Product.jsx';
import data from '../src/Collection/Collection1.js';
import NavCollection from '../src/Navcollection/NavCollection.jsx';
import Car from '../src/Carcollection/Car.jsx';
import Service from '../src/Servicenow/Servicenow.jsx';
import Contact from '../src/Contact/Contact.jsx';
import About from './About/About.jsx';
import Footer from './Footer/Footer.jsx';
 

function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home /> 
              <Service /> 
              <About/>
              <Car  CarCollection={data} />
             
            </>
          } 
        />
        <Route path="/product/:id" element={<Product collections={data} />} />
        <Route path="/NavCollection" element={<NavCollection />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path ='/About' element = {<About/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    
     
  );
}

export default App;

 