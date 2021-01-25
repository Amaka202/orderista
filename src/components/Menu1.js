import React from 'react'
import './styles/menu.css'
import { Divider, Button } from 'rsuite';
import { Link } from "react-router-dom";
import rice from './images/rice.jpg'
import SideBar from './sideBarContent';
import Logo from './Logo';



function Menu() {
    return (
        <div className="flexed-div">
            <SideBar />
            
        </div>
    )
}

export default Menu
