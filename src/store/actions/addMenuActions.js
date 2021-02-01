export const addMenu = (menu) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('menus').add({
            ...menu,
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

    export const deleteMenu = (id) => {
        return (dispatch, getState, {getFirebase, getFirestore}) => {
            // make async call to db
            const firestore = getFirestore();
            firestore.collection('menus').doc(id)
            .delete()
            .then(() => {
                dispatch({
                    type: 'DELETE_MENU',
                    id
                })
            }).catch((e) => {
                dispatch({
                    type: 'DELETE_MENU_ERROR',
                    e
                })
            })
                
          }
        }
