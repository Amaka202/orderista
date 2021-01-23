import React from 'react'
import './styles/menu.css'
import { Divider, Button } from 'rsuite';
import { Link } from "react-router-dom";
import rice from './images/rice.jpg'
import SideBar from './SideBar';
import Logo from './Logo';



function Menu() {
    return (
        <div className="flexed-div">
            <SideBar />
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
                <div className="menu-btn">
                    <Button size="lg" color="">
                        <Link to="/orders" style={{color: 'white', textDecoration: 'none'}}>Place Order</Link>
                    </Button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Menu
