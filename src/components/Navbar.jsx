import React from 'react';
import {NavLink} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../App.css';

const changeColor = ({isActive}) => {
  return {
    color: isActive ? 'red' : ''
  }
}

const Navbar = () => {
  return (
    <>
    <div className='container'>
        <ul className='menu' >
            <li><NavLink to="/about" style={changeColor}><h1>About Me</h1></NavLink></li>
            <li><NavLink to="/contact" style={changeColor}><h1>Contact me</h1></NavLink></li>
            <li><NavLink to="/portfolio" style={changeColor}><h1>Portfolio</h1></NavLink></li>
        </ul>
    </div>
    </>
  )
}
  
export default Navbar