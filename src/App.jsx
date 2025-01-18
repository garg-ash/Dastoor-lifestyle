import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import OurProjects from './Pages/OurProjects.jsx';
import ProductPage from './Pages/ProductPage';


function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/products/:category" element={<ProductPage />} />
        <Route path='/ourproject' element={<OurProjects />}/>
        <Route path="/products/:category" element={<ProductPage />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        
      </Routes>
    </Router>
      <Footer/>
    </>
  )
}

export default App
