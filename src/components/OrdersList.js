import React from 'react'
import './styles/menu.css';
import './styles/sidebar.css';
import dayjs from 'dayjs';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import MyHeader from './Header/MyHeader'

import { Container, Header, Content, Footer} from 'rsuite';
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function OrdersList(props) {
    const {orders, menus} = props;
    console.log(orders);
    const orderList = orders && orders.map(val => {
        return(
                <div className="order-item" key={val.id}>
                    <p>{`${val.userName} made the following order(s) ${dayjs(val.createdAt).fromNow()}`}</p>
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
                    <p>2 hours ago</p>
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
                    <div>
                        <p>Orders </p>
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

