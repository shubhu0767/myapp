import React from 'react'
import { useParams } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';


const DataChild = () => {
    const {id} = useParams();

    if (id === 'about') {
      return <About />
    }
    if (id === 'contact') {
      return <Contact />
    }
    if (id === 'portfolio') {
      return <Portfolio />
    }
  return (
    <>
    <div>
      Welcome to my page
    </div>
    </>
  )
}

export default DataChild