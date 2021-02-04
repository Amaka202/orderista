import React, {useEffect, useState} from 'react'
import { Modal, Button, Alert, Drawer} from 'rsuite';
import { useForm } from "react-hook-form";
import { v4 as uuid} from 'uuid';
import {connect} from 'react-redux';
import {addMenu} from '../store/actions/addMenuActions';
import './styles/addmenu.css'
import currentWindowWidth from './getCurrentWindowWidth';



function AddMenuModal(props) {
    const { register, handleSubmit, errors, reset } = useForm();
    const {handleClose, show, addMenu, time} = props;
    const picId = uuid();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState("");

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    }

    const onSubmit = data => {
      console.log(file);
      if(!file){
        Alert.error('Please upload a meal pic', 5000)
      }else{
        setLoading(true)
        addMenu(data, file, picId)
      }
      
    };
    
    
    useEffect(() => {
      if(time){
        setLoading(false)
        reset()
      }
    }, [time, reset])

    if(currentWindowWidth()[0] < 700){
      return (
        <Drawer
          placement="bottom"
          show={show}
          onHide={handleClose}
        >
          <Drawer.Header>
            <Drawer.Title>Add Menu</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body className='modal-drawer'>
          <form className="modal-form">
                      <div className="form-control">
                            <label>Cathegory</label>
                            <select ref={register} name="cathegory">
                              <option value="entree">Entrée</option>
                                <option value="appetizer">Appetizer</option>
                                <option value="desert">Desert</option>
                                <option value="drink">Drink</option>
                            </select>
                            {errors.cathegory && <p className="error-text-draw">This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Meal Name</label>
                            <input 
                                name="mealName" 
                                defaultValue="" 
                                ref={register ({required: true}) } 
                            />
                            {errors.mealName && <p className="error-text-draw">This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Meal Description</label>
                            <textarea 
                                name="description" 
                                
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.description && <p className="error-text-draw">This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Meal Price</label>
                            <input 
                                name="price" 
                                type="number"
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.price && <p className="error-text-draw">This field is required</p>}
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
          </Drawer.Body>
          <Drawer.Footer>
            <Button loading={loading} onClick={handleSubmit(onSubmit)} appearance="primary" style={{backgroundColor: '#ED5358'}}>
              Submit
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Close
            </Button>
          </Drawer.Footer>
        </Drawer>
      )
    }else{    
    return (
        <div className="modal-container">
        <Modal full show={show} onHide={handleClose} size='sm'>
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
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    time: state.addMenu.time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMenu: (menu, file, id) => dispatch(addMenu(menu, file, id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps ) (AddMenuModal);
