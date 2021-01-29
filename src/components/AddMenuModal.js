import React from 'react'
import { Modal, Button} from 'rsuite';
import { useForm } from "react-hook-form";
import {connect} from 'react-redux';
import {addMenu} from '../store/actions/addMenuActions';
import './styles/addmenu.css'


function AddMenuModal(props) {
    const { register, handleSubmit, errors } = useForm();
    const {handleClose, show, addMenu} = props
    const onSubmit = data => {
      addMenu(data)
    };

    return (
        <div className="modal-container">
        <Modal full show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <form className="modal-form">
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
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.price && <p className="error-text">This field is required</p>}
                        </div>
                        {/* <div>
                            <label>Upload a Picture of the Meal</label>
                            <input ref={register} type="file" name="mealpic" />
                        </div> */}
                    </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSubmit(onSubmit)} appearance="primary" style={{backgroundColor: '#ED5358'}}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addMenu: (menu) => dispatch(addMenu(menu))
  }
}

export default connect(null, mapDispatchToProps ) (AddMenuModal);
