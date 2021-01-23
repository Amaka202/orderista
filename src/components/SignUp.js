import React from 'react';
import './styles/signup.css'
import { useForm } from "react-hook-form";
import { Button } from 'rsuite';
import { Link } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';
import Header1 from './Header1';


function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => console.log(data);

    return (
        <div className="bg">
            <div className="overlay">
            <Header1 />
            <div className="signup-container">
                <div>
                    <h3>Sign Up</h3>
                </div>    
                <div className="signup-form-div">
                    <form >
                        <div className="form-control">
                            <label>First Name</label>
                            <input 
                                name="firstName" 
                                defaultValue="" 
                                ref={register ({required: true}) } 
                            />
                            {errors.firstName && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Last Name</label>
                            <input 
                                name="lastName" 
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.lastName && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Email</label>
                            <input 
                                name="email" 
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.email && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Password</label>
                            <input 
                                name="password" 
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.password && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Gender</label>
                            <input 
                                name="gender" 
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.gender && <p>This field is required</p>}
                        </div>
                        <div className="signup-btn-div">
                            <Button size="lg" onClick={handleSubmit(onSubmit)} className="btn"> Submit</Button>
                        </div>
                    </form>
                </div>
        </div>
            </div>
        </div>
    )
}

export default SignUp;
