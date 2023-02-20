import React from 'react';
import {Link} from 'react-router-dom';


const changeColor = (e) => {
   e.target.classList = "selected";
}
const Navbar = () => {
  return (
    <>
    <div className='container'>
        <ul className='menu' onClick={changeColor}>
            <li><Link to="/about"><h1 onClick={changeColor}>About me</h1></Link></li>
            <li><Link to="/contact"><h1 onClick={changeColor}>Contact me</h1></Link></li>
            <li><Link to="/portfolio"><h1 onClick={changeColor}>Portfolio</h1></Link></li>
        </ul>
    </div>
    </>
  )
}
  
export default Navbar