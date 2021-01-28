import React from 'react'
import rice from './images/rice.jpg'
import './styles/menu.css';

function MenuList({menus}) {
    return (
        <div>
            {menus && menus.map(menu => {
                return (
                    <div className="menu-item" key={menu.id}>
                        <div className="food-pic">
                            <img src={rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>{menu.menuname}</p>
                            <p>{menu.menudesc}</p>
                            <div className="price-div">
                                <p>₦2000</p>
                                <label class="checkbox">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MenuList;
