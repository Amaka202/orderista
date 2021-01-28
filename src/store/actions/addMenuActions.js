export const addMenu = (menu) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('menus').add({
            ...menu,
            authorFirstName: 'amaka',
            authorLastName: 'umeh',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'ADD_MENU',
                menu
            })
        }).catch((e) => {
            dispatch({
                type: 'ADD_MENU_ERROR',
                e
            })
        })
            
      }
    }
