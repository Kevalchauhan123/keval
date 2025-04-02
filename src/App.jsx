import './App.css'
import Utility from './templates/404';
import Contact from './templates/contact';
import Home from './templates/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './templates/Nav';
import About from './templates/About';
import Work from './templates/work';


function App() {

  return (
    <>
    <BrowserRouter>
    {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/404" element={<Utility />} />

      </Routes> 
      </BrowserRouter>   
     
    </>
  )
}

export default App
