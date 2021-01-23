import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './styles/header1.css';

function Logo() {
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className="logo">
            {element}
            <span>Orderister!</span>
        </div>
    )
}

export default Logo;
