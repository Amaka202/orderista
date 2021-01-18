import React from 'react'
import './home.css';
import { Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import deliveryBike from './images/deliveryBike.png'

function home() {
    return (
        <div className="home-container">
            <div className="flexed-home-container">
                <div className="home-caption">
                    <div className="h1-div">
                        <h1>Top 
                            <span> #1 </span> 
                            Fastest</h1> 
                        <h1>Delivery Food For You</h1>
                    </div> 
                    <p>Order food and get delivery in the fastest</p>
                    <p>time in the town</p>
                </div>  
                <div className="home-img-div">
                    <img src={deliveryBike} alt="delivery bike"/>
                </div>
            </div>
            <div className="btn-div">
                <Button size="lg" color="#ED5358">Get Started</Button>
            </div>
        </div>
    )
}

export default home
