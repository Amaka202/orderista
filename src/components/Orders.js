import React, {useState} from 'react'
import Logo from './Logo'
import { Container, Header, Content, Divider, Footer, Sidebar, Button, Drawer, IconButton, Icon, FlexboxGrid} from 'rsuite';
import SideBar from './SideBar';
import sideBarContent from './sideBarContent'
import currentWindowWidth from './getCurrentWindowWidth';
import './styles/order.css'
import goneShopping from './images/goneShopping.png'

function Orders() {
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
            <div className="order-container">
                <Logo />
                <div className="order-div">
                    <div>
                        <img src={goneShopping} alt="delivery bike"/>
                    </div>
                <p>My Order</p>
                <ul>
                    <li>
                        Rice and Chicken
                        <span> ₦2000</span>
                    </li>
                    <li>
                        Rice and Chicken
                        <span> ₦2000</span>
                    </li>
                    <li>
                        Rice and Chicken
                        <span> ₦2000</span>
                    </li>
                    <li>
                        Rice and Chicken
                        <span> ₦2000</span>
                    </li>
                </ul>
                <p>Delivery Price: 
                    <span> ₦2000</span>
                </p>
                <p>Total Price:
                    <span> ₦20, 000</span>
                </p>
                <p>Order recieved, we will be intouch in less than 1 hour</p>
                </div>
            </div>
            </Container>
        </Container>
    )
}

export default Orders
