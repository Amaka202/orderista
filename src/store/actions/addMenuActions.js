import { Alert} from 'rsuite';

export const addMenu = (menu, file, id,) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        const firebase = getFirebase();

        const imageRef = firebase.storage().ref('foodpics').child(id)
        imageRef.put(file)
        .then(data => data.ref.getDownloadURL())  
        .then((foodPicUrl) => {
            firestore.collection('menus').add({
                ...menu,
                foodPicUrl,
                createdAt: new Date()
            })
        })
        .then(() => {
            Alert.success('Menu added successfully', 5000)
            dispatch({
                type: 'ADD_MENU',
                menu,
                file,
                time: new Date()
            })
        }).catch((e) => {
            Alert.error('Opertion failed, check your network connection', 5000)
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
