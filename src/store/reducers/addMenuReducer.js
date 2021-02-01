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
            return state;
        case 'ADD_MENU_ERROR':
            console.log('created menu', action.err); 
            return state;
        case 'DELETE_MENU':
            console.log('deleted menu', action.id);  
            return state;
        case 'DELETE_MENU_ERROR':
            console.log('deleted menu', action.err); 
            return state;        
        default:
            return state;
    }
}

export default addMenuReducer;