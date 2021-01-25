import React, {useState} from 'react'
import './styles/menu.css';
import './styles/sidebar.css';
import rice from './images/rice.jpg'
import Logo from './Logo';

import { Container, Header, Content, Divider, Footer, Sidebar, Button, Drawer, IconButton, Icon} from 'rsuite';
import sideBarContent from './sideBarContent'
import currentWindowWidth from './getCurrentWindowWidth';
import AddMenuModal from './AddMenuModal';

function Menu() {
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

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
                <div className="menu-title">
                    <h3>Choose what you</h3>
                    <h4>want to eat today</h4>
                    <p>Today's Menu</p>
                    <p className="small-p">(Check the box to order)</p>
                    {/* <p>loremt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> */}
                </div>
                <div className="menu-list">
                    <div className="menu-item">
                        <div className="food-pic">
                            <img src={rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>Rice and Chicken</p>
                            <p>loremt is a long established fact that a reader will</p>
                            <div className="price-div">
                                <p>₦2000</p>
                                <label class="checkbox">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="food-pic">
                            <img src={rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>Rice and Chicken</p>
                            <p>Peppered chicken flavour</p>
                            <div className="price-div">
                                <p>₦2000</p>
                                {/* <Divider vertical /> */}
                                <label class="checkbox">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="food-pic">
                            <img src={rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>Rice and Chicken</p>
                            <p>Peppered chicken flavour</p>
                            <div className="price-div">
                                <p>₦2000</p>
                                {/* <Divider vertical /> */}
                                <label class="checkbox">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="food-pic">
                            <img src={rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>Rice and Chicken</p>
                            <p>Peppered chicken flavour</p>
                            <div className="price-div">
                                <p>₦2000</p>
                                {/* <Divider vertical /> */}
                                <label class="checkbox">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="food-pic">
                            <img src={rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>Rice and Chicken</p>
                            <p>Peppered chicken flavour</p>
                            <div className="price-div">
                                <p>₦2000</p>
                                {/* <Divider vertical /> */}
                                <label class="checkbox">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="food-pic">
                            <img src={rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>Rice and Chicken</p>
                            <p>Peppered chicken flavour</p>
                            <div className="price-div">
                                <p>₦2000</p>
                                {/* <Divider vertical /> */}
                                <label class="checkbox">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="food-pic">
                            <img src={rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>Rice and Chicken</p>
                            <p>Peppered chicken flavour</p>
                            <div className="price-div">
                                <p>₦2000</p>
                                {/* <Divider vertical /> */}
                                <label class="checkbox">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider />
                <AddMenuModal show={show} handleClose={hideModal}>
                    <p>Modal</p>
                </AddMenuModal>
                <div className="menu-btn">
                    <Button size="lg" color="" onClick={showModal} style={{color: 'white'}}>
                        Add Menu
                    </Button>
                </div>
            </div>
            </div>
                </Content>
                <Footer></Footer>
            </Container>
        </Container>
    )
}

export default Menu
