import {LOGGED_IN_USER} from './action';

const initialState = {
    user: {}
};

export default function reducer(state=initialState, action){
    switch (action.type) {
        case LOGGED_IN_USER:
            return action.payload;   
        default:
            return state;
    }
}