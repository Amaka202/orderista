import {auth} from '../../firebase';
export const LOGGED_IN_USER = 'LOGGED_IN_USER';

export const loggedInUser = () => {
    return dispatch => {
        auth.onAuthStateChanged(user => {
            dispatch({
              type: LOGGED_IN_USER,
              payload: user
            });
    })
}

}
