const initialState = {}

const uploadFoodPicReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPLOAD_FOOD_PIC':
            console.log('Pic Uploaded', action.foodPicUrl);  
            return {
                ...state,
                foodPicUrl: action.foodPicUrl
            };
        case 'UPLOAD_FOOD_PIC_ERROR':
            console.log('error uploading pic', action.e); 
            return state;          
        default:
            return state;
    }
}

export default uploadFoodPicReducer;