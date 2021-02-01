import React from 'react';
import { useForm } from 'react-hook-form';
// import './styles/menu.css';
// import './styles/sidebar.css';
import { connect } from "react-redux";
import rice from './images/rice.jpg'
import {displayMenyFnx} from './menuFunction';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {addOrder} from '../store/actions/orderActions';
import { Container, Header, Content, Divider, Footer, Button} from 'rsuite';
import MyHeader from './Header/MyHeader';

function Menu(props) {
    const {menus, userId, userInfo, addOrder} = props;
    const { handleSubmit, register } = useForm();
    let user = userInfo && userInfo.filter(val => userId === val.id)
    user = user && user[0];
    console.log(user);
    console.log(props);

    const onSubmit = data => {
        const order = {
            ...data,
            userName: user.displayName,
            userEmail: user.email,
            createdAt: new Date().toLocaleString()
        }
        addOrder(order)
        console.log(order);
      };

      const entree = menus && menus.filter(val => val.cathegory === "entree")
      const appetizer = menus && menus.filter(val => val.cathegory === "appetizer")
      const desert = menus && menus.filter(val => val.cathegory === "desert")
      const drink = menus && menus.filter(val => val.cathegory === "drink")
      console.log("entree", entree);

      const entreeMenu = displayMenyFnx(entree, register);
      const appetizerMenu = displayMenyFnx(appetizer, register);
      const desertMenu = displayMenyFnx(desert, register);
      const drinkMenu = displayMenyFnx(drink, register)
    
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
                </div>
                <Divider>Entrée</Divider>
                <div className="menu-list">
                    {entreeMenu}
                </div>
                <Divider>Appetizer</Divider>
                <div className="menu-list">
                    {appetizerMenu}
                </div>
                <Divider>Desert</Divider>
                <div className="menu-list">
                    {desertMenu}
                </div>
                <Divider>Drinks</Divider>
                <div className="menu-list">
                    {drinkMenu}
                </div>

                <div className="textarea-div">
                    <label>Preferences</label>
                    <textarea
                        ref={register}
                        name='preferences'
                        placeholder="Tell us about your preferences, allergies, how many plates etc. Anything we should know about your eating habit"
                    >

                    </textarea>
                </div>
                <Divider />
                <div className="menu-btn">
                    <Button size="lg" color="white" onClick={handleSubmit(onSubmit)}>
                        Place Order
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
        menus: state.firestore.ordered.menus,
        userId: state.firebase.auth.uid,
        userInfo: state.firestore.ordered.users
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addOrder: (order) => dispatch(addOrder(order))
    }
  }

  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'menus'},
        {collection: 'users'}
    ])
) (Menu);