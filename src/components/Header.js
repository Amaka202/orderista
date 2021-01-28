import React from 'react';
import {connect} from 'react-redux';


function Header() {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Header)
