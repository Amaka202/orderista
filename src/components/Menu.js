import React, {useState} from 'react'
// import './styles/menu.css';
// import './styles/sidebar.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import rice from './images/rice.jpg'
import {loggedInUser} from '../store/actions/action';
import {useHistory} from "react-router-dom";
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Container, Header, Content, Divider, Footer, Sidebar, Button, Drawer, IconButton, Icon} from 'rsuite';
import currentWindowWidth from './getCurrentWindowWidth';
import AdminHeader from './Header/AdminHeader';
import SignedInHeader from './Header/SignedInHeader';
import MyHeader from './Header/MyHeader';

function Menu(props) {
    console.log(currentWindowWidth()[0]);

    console.log(props);
    const history = useHistory('');
    // props.loggedInUser() 
    // props.user !== null && history.push('/login')
    return (
        <Container>
            <Header>
                <MyHeader />
            </Header>            
            <Container>
                <Content>
                <div className="menu-container">
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
                </Content>
                <Footer></Footer>
            </Container>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
      user: state.user,
    };
  }

  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'menus'}
    ])
) (Menu);