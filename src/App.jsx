import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Design from './components/Design';
import Weekly from './components/Weekly';
import Collaborations from './components/Collaborations';
import OurDesigners from './components/OurDesigners';
import Principals from './components/Principals';
import CollaborateCreate from './components/CollaborateCreate';
import Footer from './components/Footer';



function App() {


  return (
    <>
    <h1>DESIGN</h1>
    <Design />
    <Navbar />
    <Weekly />
    <Collaborations />
    <OurDesigners/>
    <Principals />  
    <CollaborateCreate />
    <Footer/>
    </>
  )
}

export default App
