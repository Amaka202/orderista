import React from 'react'
import rice from './images/rice.jpg'
import './styles/menu.css';
import {connect} from 'react-redux';
import {deleteMenu} from '../store/actions/addMenuActions';

function MenuList({menus, deleteMenu}) {

    const handleDeleteMenu = (id) => {
        deleteMenu(id)
    }
    return (
        <div>
            {menus && menus.map(menu => {
                return (
                    <div className="menu-item" key={menu.id}>
                        <div className="food-pic">
                            <img src={menu.foodPicUrl ? menu.foodPicUrl : rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>{menu.mealName}</p>
                            <p>{menu.description}</p>
                            <div className="price-div">
                                <p>₦{menu.price}</p>
                            </div>
                            <div className="del-div">
                                <h6 onClick={() => handleDeleteMenu(menu.id)}>Delete Menu</h6>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteMenu: (id) => dispatch(deleteMenu(id))
    }
  }

export default connect(null, mapDispatchToProps) (MenuList);
