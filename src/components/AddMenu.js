import React, {useState} from 'react'
import './styles/menu.css';
import './styles/sidebar.css';
import {firestoreConnect, isLoaded} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { Container, Header, Content, Divider, Footer, Button} from 'rsuite';
import AddMenuModal from './AddMenuModal';
import MenuList from './MenuList';
import MyHeader from './Header/MyHeader';
import {Redirect} from 'react-router-dom';
import CustomLoader from './CustomLoader';

function AddMenu(props) {
    const [show, setShow] = useState(false);
    const {menus, auth} = props;

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    console.log(props);
    if(!auth.uid) return <Redirect to="/login" />
    if(auth.uid && auth.email !== 'admin@gmail.com') return <Redirect to="/menu" />


    if(!isLoaded(menus))  {
        return  <CustomLoader /> 
    }
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
                    <h3>Added menus</h3>
                </div>
                <div className="menu-ordered-list">
                    <MenuList menus={menus}/>
                </div>
                <Divider />
                <AddMenuModal show={show} handleClose={hideModal}>
                    <p>Modal</p>
                </AddMenuModal>
                <div className="menu-btn">
                    <Button size="lg" color="" onClick={showModal} style={{color: 'white'}}>
                        Add Menu
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

const mapStateToProps = (state) => {
    return {
        menus: state.firestore.ordered.menus,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'menus'}
    ])
) (AddMenu);
