import React, {useState} from 'react';
import { Navbar, Nav } from 'rsuite';
import {Link} from 'react-router-dom'
import { Container,  Button, Drawer, IconButton, Icon} from 'rsuite';
import Logo from '../Logo';
import currentWindowWidth from '../getCurrentWindowWidth';
import './header.css';
// import {Link } from 'react-router-dom'

function SignOutHeader() {
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

    return (
        <Container>
            {currentWindowWidth()[0] > 700 
                ?
                <div>
                    <Navbar className="navbar">
                    <Navbar.Header>
                    <Logo />
                    </Navbar.Header>
                    <Navbar.Body>
                    <Nav pullRight  className="nav-div">
                        <Nav.Item>
                            <Link to="/" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.2em'}}>Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Link to="/login" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.2em'}}>Login/SignUp</Link>

                        </Nav.Item>
                        <Nav.Item>
                        <Link to="/about" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.2em'}}>About Us</Link>

                        </Nav.Item>
                        <Nav.Item>
                        <Link to="/contact" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.2em'}}>Contact Us</Link>
                        </Nav.Item>
                    </Nav>
                    </Navbar.Body>
                    </Navbar>
                </div>
                :
                <div>
                    <div>
                        <Navbar className="navbar">
                        <Navbar.Header>
                            <Logo />
                        </Navbar.Header>
                        <Navbar.Body>
                        <Nav pullRight  className="nav-div">
                                <IconButton className="burger-icon" onClick={() => setOpenMobileDrawer(true)} icon={<Icon icon="bars" />}/> 
                        </Nav>
                        </Navbar.Body>
                        </Navbar>
                    </div>

                    <Drawer
                        size={'xs'}
                        placement={'right'}
                        show={openMobileDrawer}
                        className="drawer"
                        onHide={() => setOpenMobileDrawer(false)}>
                        <Drawer.Body className="drawer-body">
                        <Navbar className="navbar">
                            <Navbar.Body>
                            <ul>
                                <li>
                                <Link to="/" style={{color: 'white', textDecoration: 'none', fontSize: '1.4em'}}>Home</Link>
                                </li>
                                <li>
                                <Link to="/login" style={{color: 'white', textDecoration: 'none', fontSize: '1.4em'}}>Login/SignUp</Link>
                                </li>
                                <li>
                                <Link to="/about" style={{color: 'white', textDecoration: 'none', fontSize: '1.4em'}}>About Us</Link>
                                </li>
                                <li>
                                <Link to="/contact" style={{color: 'white', textDecoration: 'none', fontSize: '1.4em'}}>Contact Us</Link>
                                </li>
                            </ul>
                            </Navbar.Body>
                        </Navbar>
                        </Drawer.Body> 
                        <Drawer.Footer className="menu-btn">
                            <Button style={{ width: '100%', color:'white' }} onClick={() => setOpenMobileDrawer(false)}>Close</Button>
                        </Drawer.Footer>  
                    </Drawer>

                
                </div>
            }
            
            <div className="nav-bg">
                <div className="bg-write-up">
                    <p>Tasty food</p>
                    <p>fast delivery!</p>
                </div>
            </div>
        </Container>
    )
}

export default SignOutHeader;