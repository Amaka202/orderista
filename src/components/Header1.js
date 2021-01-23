import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'rsuite';
import Logo from './Logo'

function Header1() {
    return (
        <div className="header1-div">
            <Logo />
            <Button size="lg" color="">
                <Link to="/login" style={{color: 'white', textDecoration: 'none'}}>Sign In</Link>
            </Button>
        </div>
    )
}

export default Header1;
