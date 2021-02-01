import React, {useState} from 'react'
import './styles/menu.css';
import './styles/sidebar.css';
import Logo from './Logo';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { Container, Header, Content, Divider, Footer, Sidebar, Button, Drawer, IconButton, Icon} from 'rsuite';
import sideBarContent from './sideBarContent'
import currentWindowWidth from './getCurrentWindowWidth';
import AddMenuModal from './AddMenuModal';
import MenuList from './MenuList';
import MyHeader from './Header/MyHeader';

function AddMenu(props) {
    const [show, setShow] = useState(false);
    const {menus} = props;

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    console.log(props);

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
                <div className="menu-list">
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
    console.log(state);
    return {
        menus: state.firestore.ordered.menus
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'menus'}
    ])
) (AddMenu);
