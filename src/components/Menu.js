import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/menu.css';
// import './styles/sidebar.css';
import { connect } from "react-redux";
import {displayMenyFnx} from './menuFunction';
import {compose} from 'redux';
import {useHistory} from "react-router-dom"
import {firestoreConnect, isLoaded} from 'react-redux-firebase';
import {addOrder} from '../store/actions/orderActions';
import { Container, Header,Alert, Content, Divider, Footer, Button} from 'rsuite';
import MyHeader from './Header/MyHeader';
import CustomLoader from './CustomLoader';

function Menu(props) {
    const {menus, userId, userInfo, addOrder} = props;
    const history = useHistory('');
    const { handleSubmit, register } = useForm();
    let user = userInfo && userInfo.filter(val => userId === val.id)
    user = user && user[0];

    let myData = [];
    
    const handleChecked = (e, meal) => {
        if(e.target.checked){
            myData.push(meal)
        }else{
            myData = myData.filter(val => val.mealName !== meal.mealName)
        }
    }




    const onSubmit = data => {
        console.log(data);
        if(data.orderedmeal.length === 0){
            Alert.error('please tick a checkbox to order', 5000)
        }else{
            const order = {
                ...data,
                mealArr1: myData,
                userName: user.displayName,
                userEmail: user.email,
                userAddress: user.address,
                userPhoneNumber: user.phone,
                createdAt: new Date().toLocaleString()
            }
            addOrder(order)
            console.log(order);
            history.push('/cart')
        }
      };

      const entree = menus && menus.filter(val => val.cathegory === "entree")
      const appetizer = menus && menus.filter(val => val.cathegory === "appetizer")
      const desert = menus && menus.filter(val => val.cathegory === "desert")
      const drink = menus && menus.filter(val => val.cathegory === "drink")

      const entreeMenu = displayMenyFnx(entree, register, handleChecked);
      const appetizerMenu = displayMenyFnx(appetizer, register, handleChecked);
      const desertMenu = displayMenyFnx(desert, register, handleChecked);
      const drinkMenu = displayMenyFnx(drink, register, handleChecked)
    
    if(!isLoaded(menus))  {
        return  <CustomLoader /> 
    }

    else{
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
}

function mapStateToProps(state) {
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