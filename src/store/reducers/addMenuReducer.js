
const initialState = {}

const addMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MENU':
            console.log('created menu', action.menu);  
            return {
                ...state,
                status: "Menu Created Successflly",
                loading: 'stop now',
                time: action.time
            }
        case 'ADD_MENU_ERROR':
            console.log('created menu', action.e); 
            return {
                ...state,
                status: "Menu creation failed",
                loading: 'stop now'
            }     
        case 'DELETE_MENU':
            console.log('deleted menu', action.id);  
            return {
                ...state,
                status: "Menu deleted successfully",
                loading: 'stop now'
            }
        case 'DELETE_MENU_ERROR':
            console.log('deleted menu', action.e); 
            return {
                ...state,
                status: "Menu deletion failed"
            }        
        default:
            return state;
    }
}

export default addMenuReducer;