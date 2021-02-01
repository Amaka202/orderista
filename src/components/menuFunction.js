import rice from './images/rice.jpg'




export const displayMenyFnx = (arr, register, handleChecked) => {
    return  arr && arr.map(val => {
        return (
            <div className="menu-item" key={val.id}>
                        <div className="food-pic">
                            <img src={val.foodPic ? val.foodPic : rice} alt="rice"/>
                        </div>
                        <div className="menu-name">
                            <p>{val.mealName}</p>
                            <p>{val.description}</p>
                            <div className="price-div">
                                <p>{val.price}</p>
                                <label class="checkbox">
                                    <input type="checkbox" 
                                        ref={register}
                                        name='orderedmeal'
                                        value={val.id}
                                        onClick={() => handleChecked({
                                            mealName: val.mealName,
                                            mealId: val.id,
                                            mealPrice: val.price
                                        })}
                                    />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
        )
    })
}