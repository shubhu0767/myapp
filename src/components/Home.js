import React from 'react'
import {Link} from 'react-router-dom'



const Home = () => {
  return (
    <>
    <div className='container'>
        <ul className='menu'>
            <li><Link to="/about">About me</Link></li>
            <li><Link to="/contact">Contact me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
        
    </div>
    
    </>
  )
}
  
export default Home