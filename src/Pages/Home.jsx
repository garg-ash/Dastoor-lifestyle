import React from 'react'
import './CSS/Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero.jsx'
import GallaryHome from '../Components/GallaryHome/GallaryHome.jsx'
import Testimonials from '../Components/Testimonials/Testimonials.jsx'
import Projects from '../Components/Projects/Projects.jsx'
import Feature from '../Components/Feature/Feature.jsx'
import RealVisualization from '../Components/RealVisualization/RealVisualization.jsx'
import Info from '../Components/Info/Info.jsx'


const Home = () => {
  return (
    <>
    <Hero/>
    <RealVisualization/>
    <GallaryHome /> 
    {/* <Feature/> */}
    <Info/>
    <Projects />
    <Testimonials/>
    </>
  )
}

export default Home