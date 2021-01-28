const initialState = {
    menu: [
        {id: '1', menuname: 'Rice', menudesc: 'its delicious'},
        {id: '2', menuname: 'Yam', menudesc: 'its not for the weak'},
        {id: '2', menuname: 'Garri', menudesc: 'its really nice'}
    ]
}

const addMenuReducer = (state = initialState, action) => {
    return state;
}

export default addMenuReducer;