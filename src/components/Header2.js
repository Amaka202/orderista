import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'rsuite';
import Logo1 from './Logo1'

function Header2() {
    return (
        <div className="header1-div">
            <Logo1 />
            <Button size="lg" color="">
                <Link to="/register" style={{color: 'white', textDecoration: 'none'}}>Sign Up</Link>
            </Button>
        </div>
    )
}

export default Header2;
