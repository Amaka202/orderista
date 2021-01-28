import React, {useState} from 'react'
import './styles/menu.css';
import './styles/sidebar.css';
import { Link } from 'react-router-dom'
import Logo from './Logo';

import { Container, Header, Content, Footer, Sidebar, Button, Drawer, IconButton, Icon} from 'rsuite';
import sideBarContent from './sideBarContent'
import currentWindowWidth from './getCurrentWindowWidth';

function OrdersList() {
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

    return (
        <Container>
            

            {currentWindowWidth()[0] > 700 
                ?
                <Sidebar className="sidebar">
                    {sideBarContent()}
                </Sidebar>
                :
                <>
                <IconButton className="burger-icon" onClick={() => setOpenMobileDrawer(true)} icon={<Icon icon="bars" />}/> 

                <Drawer
                    size={'xs'}
                    placement={'left'}
                    show={openMobileDrawer}
                    className="drawer"
                    onHide={() => setOpenMobileDrawer(false)}>
                     <Drawer.Body className="drawer-body">
                     {sideBarContent()}     
                    </Drawer.Body> 
                    <Drawer.Footer className="menu-btn">
                        <Button style={{ width: '100%', color:'white' }} onClick={() => setOpenMobileDrawer(false)}>Close</Button>
                    </Drawer.Footer>  
                </Drawer>
                </>
            }
            
            <Container>
                <Header></Header>
                <Content>
                <div className="menu-container">
                <Logo />
                <div>
                
                <div className="order-list">
                    <div className="order-item">
                        <p>Umeh Chiamaka</p>
                        <p>Fried Rice and Chicken</p>
                        <p>2 hours ago</p>
                        <Link to="/register" style={{color: 'white', textDecoration: 'none'}}>Sign Up</Link>

                    </div> <br />

                    <div className="order-item">
                        <p>Umeh Chiamaka</p>
                        <p>Fried Rice and Chicken</p>
                        <p>2 hours ago</p>
                    </div> <br />

                    <div className="order-item">
                        <p>Umeh Chiamaka</p>
                        <p>Fried Rice and Chicken</p>
                        <p>2 hours ago</p>
                    </div> <br />

                    <div className="order-item">
                        <p>Umeh Chiamaka</p>
                        <p>Fried Rice and Chicken</p>
                        <p>2 hours ago</p>
                    </div> <br />

                    <div className="order-item">
                        <p>Umeh Chiamaka</p>
                        <p>Fried Rice and Chicken</p>
                        <p>2 hours ago</p>
                    </div> <br />

                    <div className="order-item">
                        <p>Umeh Chiamaka</p>
                        <p>Fried Rice and Chicken</p>
                        <p>2 hours ago</p>
                    </div> <br />
                </div>
                
            </div>
            </div>
                </Content>
                <Footer></Footer>
            </Container>
        </Container>
    )
}

export default OrdersList;

