import React from 'react'
import AdminHeader from './AdminHeader'
import SignedInHeader from './SignedInHeader';
import SignOutHeader from './SignedOutHeader';
import {connect} from 'react-redux'


function Header(props) {
    const {auth} = props;
    console.log(auth);
    return (
        <div>
            <AdminHeader />
            <SignedInHeader /> 
            <SignOutHeader />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authState: state.firebase.auth
    }
}

export default connect(mapStateToProps) (Header);
