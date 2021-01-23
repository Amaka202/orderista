import React from 'react'
import Logo from './Logo'
import SideBar from './SideBar'
import './styles/order.css'

function Orders() {
    return (
        <div className="orders-flexed">
            <SideBar />
            <div className="order-container">
                <Logo />
                <div className="order-div">
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
        </div>
    )
}

export default Orders
