import React from 'react';
import { Navbar, Nav } from 'rsuite';
import Logo from '../Logo';
import './header.css'
// import {Link } from 'react-router-dom'

function AdminHeader() {
    return (
        <Navbar className="navbar">
          <Navbar.Header>
          <Logo />
          </Navbar.Header>
          <Navbar.Body>
          <Nav pullRight  className="nav-div">
            <Nav.Item>Home</Nav.Item>
            <Nav.Item>Menu</Nav.Item>
            <Nav.Item>Add Menu</Nav.Item>
            <Nav.Item>Orders</Nav.Item>
            <Nav.Item>Sign Out</Nav.Item>
          </Nav>
          </Navbar.Body>
        </Navbar>
    )
}

export default AdminHeader;