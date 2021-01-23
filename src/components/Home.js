import React from 'react'
import './styles/home.css';
import { Link } from "react-router-dom";
import { Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import deliveryBike from './images/deliveryBike.png'
import Header1 from './Header1';

function home() {
    return (
        <div>
            <Header1 />
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
                    <Button size="lg" color="">
                        <Link to="/register" style={{color: 'white', textDecoration: 'none'}}>Get Started</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default home;
