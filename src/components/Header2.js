import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'rsuite';
import Logo from './Logo'

function Header2() {
    return (
        <div className="header1-div">
            <Logo />
            <Button size="lg" color="">
                <Link to="/register" style={{color: 'white', textDecoration: 'none'}}>Sign Up</Link>
            </Button>
        </div>
    )
}

export default Header2;
