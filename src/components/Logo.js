import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTruck } from '@fortawesome/free-solid-svg-icons'
import './styles/header1.css';

function Logo() {
    const element = <FontAwesomeIcon icon={faTruck} />
    return (
        <div className="logo">
        <Link to="/home" style={{color: 'white', textDecoration: 'none'}}>
            {element}
            <span>Orderister!</span>
        </Link>

        </div>
    )
}

export default Logo;
