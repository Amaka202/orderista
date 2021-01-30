// imp ort 

const initialState = {
    menus: [
        {id: '1', menuname: 'Rice', menudesc: 'its delicious'},
        {id: '2', menuname: 'Yam', menudesc: 'its not for the weak'},
        {id: '2', menuname: 'Garri', menudesc: 'its really nice'}
    ]
}

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