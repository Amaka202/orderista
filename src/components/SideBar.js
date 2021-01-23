import React from 'react'
import { Sidenav, Nav } from 'rsuite';
import { Link } from "react-router-dom";
import './styles/sidebar.css';


function SideBar() {
    return (
        <div>
            <div className="sidebar-container">
                <Sidenav defaultOpenKeys={['3', '4']} activeKey="any" className="sidebar">
                <Sidenav.Body>
                    <Nav  className="nav" >
                    <Nav.Item eventKey="1">
                        <Link to="/menu" style={{color: 'white', textDecoration: 'none', fontSize: '1.4em'}}>Menu</Link>
                    </Nav.Item>
                    <Nav.Item eventKey="2">
                        <Link to="/about" style={{color: 'white', textDecoration: 'none', fontSize: '1.4em'}}>About</Link>
                    </Nav.Item>
                    <Nav.Item eventKey="3">
                        <Link to="/contact" style={{color: 'white', textDecoration: 'none', fontSize: '1.4em'}}>Contact Us</Link>
                    </Nav.Item>
                    <Nav.Item eventKey="4">
                        <Link to="/register" style={{color: 'white', textDecoration: 'none', fontSize: '1.4em'}}>My Orders</Link>
                    </Nav.Item>
                    <Nav.Item eventKey="5">
                        <Link to="/register" style={{color: 'white', textDecoration: 'none', fontSize: '1.4em'}}>Get Started</Link>
                    </Nav.Item>
                    </Nav>
                </Sidenav.Body>
                </Sidenav>
            </div>
        </div>
    )
}

export default SideBar
