import React from 'react'
import Navbar from './Navbar';
import Aboutpage from '../about/Aboutpage';
import Footer from './Footer';

const About = () => {
  return (
    
    <>
        <Navbar/>
        <div>
            <Aboutpage />
        </div>
        <Footer />
    </>
  )
}

export default About;