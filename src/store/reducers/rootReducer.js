import authReducer from './authReducer';
import menuReducer from './menuReducer';
import addMenuReducer from './addMenuReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    addMenu: addMenuReducer
});

export default rootReducer;
