import React, {useState} from 'react'
import { Modal, Button, Alert} from 'rsuite';
import { useForm } from "react-hook-form";
import { v4 as uuid} from 'uuid';
import {connect} from 'react-redux';
import {addMenu} from '../store/actions/addMenuActions';
import {upLoadFoodPic} from '../store/actions/upLoadFoodPicActions';
import './styles/addmenu.css'


function AddMenuModal(props) {
    const { register, handleSubmit, errors } = useForm();
    const {handleClose, show, addMenu, upLoadFoodPic, uploadFoodPicUrl} = props;
    const picId = uuid();
    const [loading, setLoading] = useState(false);


    const onSubmit = data => {
      setLoading(false)

        return new Promise((res, rej) => {
          setTimeout(res, 5000);
        }).then(() => {
          console.log('im here');
          const updatedData = {
            ...data,
            foodPicUrl: uploadFoodPicUrl
          }
          addMenu(updatedData)
          Alert.success('Menu added successfully', 5000)
          setLoading(false)
        })
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      upLoadFoodPic(file, picId)
    }

    return (
        <div className="modal-container">
        <Modal full show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <form className="modal-form">
                      <div className="form-control">
                            <label>Cathegory</label>
                            <select ref={register} name="cathegory">
                              <option value="entree">Entrée</option>
                                <option value="appetizer">Appetizer</option>
                                <option value="desert">Desert</option>
                                <option value="drink">Drink</option>
                            </select>
                            {errors.cathegory && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Meal Name</label>
                            <input 
                                name="mealName" 
                                defaultValue="" 
                                ref={register ({required: true}) } 
                            />
                            {errors.mealName && <p className="error-text">This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Meal Description</label>
                            <textarea 
                                name="description" 
                                
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.description && <p className="error-text">This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Meal Price</label>
                            <input 
                                name="price" 
                                type="number"
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.price && <p className="error-text">This field is required</p>}
                        </div>
                        <div>
                            <label>Upload a Picture of the Meal</label>
                            <input type="file" name="mealpic" onChange={handleFileChange}/>
                        </div>
                        {/* <div>
                            <label>Upload a Picture of the Meal</label>
                            <input ref={register} type="file" name="mealpic" />
                        </div> */}
                    </form>
          </Modal.Body>
          <Modal.Footer>
            <Button loading={loading} onClick={handleSubmit(onSubmit)} appearance="primary" style={{backgroundColor: '#ED5358'}}>
              Submit
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    uploadFoodPicUrl: state.uploadFoodPicUrl.foodPicUrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMenu: (menu) => dispatch(addMenu(menu)),
    upLoadFoodPic: (file, id) => dispatch(upLoadFoodPic(file, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps ) (AddMenuModal);