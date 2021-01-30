import React from 'react'
import './styles/menu.css';
import './styles/sidebar.css';
import dayjs from 'dayjs';
import './styles/orderlist.css'
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import MyHeader from './Header/MyHeader'

import { Container, Header, Content, Footer, Drawer} from 'rsuite';
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function OrdersList(props) {
    const {orders} = props;
    console.log(orders);
    const orderList = orders && orders.map(val => {
        return(
                <div className="order-item" key={val.id}>
                    <p>
                        <span className="user-name">{val.userName} </span>
                        <span>made the following order(s) </span>
                        <span className="order-time">{dayjs(val.createdAt).fromNow()}</span>
                    </p>
                    <div>
                        <ul>
                            <li>
                                {
                                    Object.entries(val.orderedmeal).forEach((key, index) => {
                                        console.log(`${key} het`);
                                    })
                                }
                            </li>
                        </ul>
                        
                    </div>
                    <div className="user-details">
                        <p>Email Address: {val.userEmail}</p>
                        <p>Phone Number: {val.phone ? val.phone : '081836628182'}</p>
                        <p>Delivery Address: {val.address ? val.address : 'Federal housing Authority'}</p>

                    </div>
                    <Drawer />
                </div>
        )
    })
    return (
        <Container>
            <Header>
                <MyHeader />
            </Header>            
                <Content>
                <div className="menu-container">
                    <div className="orderlist-write-up">
                        <h3>Here is what the</h3>
                        <h4>customers ordered for.</h4>
                    </div>
                    <div className="order-list">
                        {orderList}
                    </div>
                </div>
                </Content>
                <Footer></Footer>
        </Container>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        orders: state.firestore.ordered.orders,
        menus: state.firestore.ordered.menus,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'menus'},
        {collection: 'orders'}
    ])
) (OrdersList);

