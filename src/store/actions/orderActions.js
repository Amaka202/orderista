export const addOrder = (order) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('orders').add(order).then(() => {
            dispatch({
                type: 'ADD_ORDER',
                order
            })
        }).catch((e) => {
            dispatch({
                type: 'ADD_ORDER_ERROR',
                e
            })
        })
            
      }
    }