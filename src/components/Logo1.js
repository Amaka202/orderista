import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTruck } from '@fortawesome/free-solid-svg-icons'
import './styles/header1.css';

function Logo1() {
    const element = <FontAwesomeIcon icon={faTruck} />
    return (
        <div className="logo1">
        <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
            {element}
            <span>Orderister!</span>
        </Link>

        </div>
    )
}

export default Logo1;