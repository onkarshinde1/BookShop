import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import ContactForm from '../Contact/ContactForm';

const Contact = () => {
  return (
    <div>
        <>
        <div>
            <Navbar/>
            <ContactForm/>
            <Footer/>
        </div>
        </>
    </div>
  )
}

export default Contact;