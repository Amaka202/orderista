import React from 'react'
import AdminHeader from './AdminHeader'
import SignedInHeader from './SignedInHeader';
import SignOutHeader from './SignedOutHeader';
import {connect} from 'react-redux'


function Header(props) {
    const {authState} = props;
    console.log(authState);
    let correctHeader;
    if(authState.email === 'admin@gmail.com' ) {
      correctHeader = <AdminHeader />
    }else if (authState.uid){
      correctHeader = <SignedInHeader />
    }else {
      correctHeader = <SignOutHeader />
    }
    // = authState.uid ? <SignedInHeader /> : <SignOutHeader />
    return (
        <div>
          {correctHeader}
            {/* <AdminHeader />
            <SignedInHeader /> 
            <SignOutHeader /> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authState: state.firebase.auth
    }
}

export default connect(mapStateToProps) (Header);
