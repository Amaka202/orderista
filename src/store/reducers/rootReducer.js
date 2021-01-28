import authReducer from './authReducer';
import menuReducer from './menuReducer';
import addMenuReducer from './addMenuReducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    addMenu: addMenuReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
