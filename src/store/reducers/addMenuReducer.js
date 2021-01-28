// imp ort 

const initialState = {
    menus: [
        {id: '1', menuname: 'Rice', menudesc: 'its delicious'},
        {id: '2', menuname: 'Yam', menudesc: 'its not for the weak'},
        {id: '2', menuname: 'Garri', menudesc: 'its really nice'}
    ]
}

const addMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MENU':
            console.log('created menu', action.menu);
            break;
    
        default:
            break;
    }
    return state;
}

export default addMenuReducer;