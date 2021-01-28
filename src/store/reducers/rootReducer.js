import authReducer from './authReducer';
import menuReducer from './menuReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer
});

export default rootReducer;
