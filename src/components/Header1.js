import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'rsuite';
import Logo1 from './Logo1'

function Header1() {
    return (
        <div className="header1-div">
            <Logo1 />
            <Button size="lg" color="">
                <Link to="/login" style={{color: 'white', textDecoration: 'none'}}>Sign In</Link>
            </Button>
        </div>
    )
}

export default Header1;
