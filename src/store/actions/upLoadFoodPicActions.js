export const upLoadFoodPic = (file, id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firebase = getFirebase();
        const imageRef = firebase.storage().ref('foodpics').child(id)
        imageRef.put(file)
        .then(data => {
            data.ref.getDownloadURL().then((foodPicUrl) => {
                dispatch({
                    type: 'UPLOAD_FOOD_PIC',
                    foodPicUrl
                })
            }).catch((e) => {
                dispatch({
                    type: 'UPLOAD_FOOD_PIC_ERROR',
                    e
                })
            })
        })  
      }
    }