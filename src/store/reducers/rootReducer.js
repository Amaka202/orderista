import authReducer from './authReducer';
import menuReducer from './menuReducer';
import addMenuReducer from './addMenuReducer';
import orderReducer from './orderReducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    addMenu: addMenuReducer,
    orders: orderReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
