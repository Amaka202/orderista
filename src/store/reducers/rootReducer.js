import authReducer from './authReducer';
import menuReducer from './menuReducer';
import addMenuReducer from './addMenuReducer';
import orderReducer from './orderReducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase'
import uploadFoodPicReducer from './uploadFoodPicReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    addMenu: addMenuReducer,
    orders: orderReducer,
    uploadFoodPicUrl: uploadFoodPicReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
