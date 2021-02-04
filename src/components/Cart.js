import React from 'react'
import { Container, Divider, Header} from 'rsuite';
import { connect } from "react-redux";
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import './styles/order.css'
import './styles/sidebar.css';
import MyHeader from './Header/MyHeader';
import goneShopping from './images/goneShopping.png'
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function Cart(props) {
    const {orders, userEmail} = props;

    
    
    const myOrders = orders && orders.filter(val => val.userEmail === userEmail)
    
    const myOrder = myOrders && myOrders.map((val) => {
        return (
            <div key={val.id} className="orders-list">
                <p className="order-time">Here is the Order you made {dayjs(val.createdAt).fromNow()}</p>
                <div className="pref-div">
                    <p className="pref">Your Preference: </p>
                    <span>{val.preferences}</span>
                </div>
                <div className="food-div">
                    <ul>
                        {val.mealArr1.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item.mealName}
                                    <span> ₦{item.mealPrice}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Divider />
            </div>
        )
    })
    return (
        <Container>
            <Header>
                <MyHeader />
            </Header>

                <div className="order-container">
                    <div className="order-div">
                    <p className="page-title">Orders</p>
                        <div>
                            <img src={goneShopping} alt="delivery bike"/>
                        </div>
                    
                    <div>
                        {myOrder}
                    </div>
                    <p className="delivery">Delivery Price: 
                        <span> ₦2000</span>
                    </p>                
                    <p className="order-recieved">Order recieved, we will be intouch in less than 1 hour</p>
                    </div>
                </div>

        </Container>
    )
}

function mapStateToProps(state) {
    console.log(state);
    return {
        orders: state.firestore.ordered.orders,
        userEmail: state.firebase.auth.email,
        userInfo: state.firestore.ordered.users
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'orders'},
        {collection: 'users'}
    ])
) (Cart);
