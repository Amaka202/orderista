const initialState = {
    authError: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login fail');  
            return {
                ...state,
                authError: 'login fail',
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');  
            return {
                ...state,
                authError: 'login success',
             }  
        default:
            return state;
    }
}

export default authReducer;