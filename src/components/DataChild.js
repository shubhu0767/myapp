import React from 'react'
import { useParams } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';


const DataChild = () => {
    const {id} = useParams();
    if(id === 'about') {
      return <About />
    }
    if(id === 'contact') {
      return <Contact />
    }
    if(id === 'portfolio') {
      return <Portfolio />
    }

  return (
    <>
      <h1>Hello Welcome to my page.</h1>
    </>
  )
}

export default DataChild