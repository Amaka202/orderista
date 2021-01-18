import React from 'react';
import './styles/signup.css'
import { useForm } from "react-hook-form";
import goneShopping from './images/goneShopping.png'
import { Button } from 'rsuite';
import { Link } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';


function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => console.log(data);

    return (
        <div className="signup-container">
                    <h3>Sign Up</h3>
                <div className="signup-form-div">
                    <form >
                        <div className="form-control">
                            <label>First Name</label>
                            <input 
                                name="firstName" 
                                defaultValue="" 
                                ref={register ({required: true}) } 
                            />
                            <div>
                            {errors.firstName && <p>This field is required</p>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label>Last Name</label>
                            <input 
                                name="lastName" 
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            <div>
                            {errors.lastName && <p>This field is required</p>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label>Email</label>
                            <input 
                                name="email" 
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            <div>
                            {errors.email && <p>This field is required</p>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label>Gender</label>
                            <input 
                                name="gender" 
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            <div>
                            {errors.gender && <p>This field is required</p>}
                            </div>
                        </div>
                        <div className="signup-btn-div">
                            <Button size="lg" onClick={handleSubmit(onSubmit)} className="btn"> Submit</Button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default SignUp;
