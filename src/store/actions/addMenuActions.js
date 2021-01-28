export const addMenu = (menu) => {
    return (dispatch, getState) => {
        // make async call to db
        dispatch({
            type: 'ADD_MENU',
            menu
        })
    }
}