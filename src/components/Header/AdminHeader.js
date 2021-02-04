import React, {useState} from 'react';
import { Navbar, Nav } from 'rsuite';
import {Link} from 'react-router-dom';
import { Container, Button, Drawer, IconButton, Icon} from 'rsuite';
import Logo from '../Logo';
import currentWindowWidth from '../getCurrentWindowWidth';
import './header.css';
import{connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions'
// import {Link } from 'react-router-dom'

function AdminHeader(props) {
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
                        <Link to="/addmenu" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.2em'}}>Add Menu</Link>

                        </Nav.Item>
                        <Nav.Item>
                        <Link to="/orderslist" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.2em'}}>Orders</Link>
                        </Nav.Item>
                        <Nav.Item>
                        <a onClick={props.signOut} href="/login" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.2em'}}>Log Out</a>

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
                                <Link to="/" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.4em'}}>Home</Link>
                                </li>
                                <li>
                                <Link to="/addmenu" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.4em'}}>Add Menu</Link>
                                </li>
                                <li>
                                <Link to="/orderslist" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.4em'}}>OrdersList</Link>
                                </li>
                                <li >
                                    <a onClick={props.signOut} href="/login" style={{color: '#f1e4e5', textDecoration: 'none', fontSize: '1.4em'}}>Log Out</a>
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

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

const mapDispathToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(mapStateToProps, mapDispathToProps) (AdminHeader);