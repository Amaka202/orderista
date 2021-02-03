// imp ort 

const initialState = {}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            console.log('ORDER ADDEDD', action.order);
             return state;
        case 'ADD_ORDER_ERROR':
            console.log('ERROR', action.err); 
            return state;
        default:
            return state;
    }
}

export default orderReducer;