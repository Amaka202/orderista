import React from 'react'
// import './styles/menu.css';
// import './styles/sidebar.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import rice from './images/rice.jpg'
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Container, Header, Content, Divider, Footer, Button} from 'rsuite';
import MyHeader from './Header/MyHeader';

function Menu(props) {
    console.log(props);
    const {menus} = props;
    const menu = menus && menus.map(val => {
        return (
            <div className="menu-item" key={val.id}>
                        <div className="food-pic">
                            <img src={val.foodPic ? val.foodPic : rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>{val.mealName}</p>
                            <p>{val.description}</p>
                            <div className="price-div">
                                <p>{val.price}</p>
                                <label class="checkbox">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
        )
    })
    
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
                    {menu}
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
    console.log(state);
    return {
        menus: state.firestore.ordered.menus
    }
  }

  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'menus'}
    ])
) (Menu);