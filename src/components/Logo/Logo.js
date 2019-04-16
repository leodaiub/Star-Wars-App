import React from 'react';
import logo from './logo.png';
import './Logo.css';
const Logo = () => {
    return (
        <div className='logo'>
            <img className='logoImg' src={logo} alt ='' width='150px' height='150px'></img>
            <h1 className='logoTitle'>Star Wars Planets</h1>
        </div>
    )
}
export default Logo;