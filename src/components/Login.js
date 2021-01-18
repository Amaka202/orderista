import React from 'react';
import './styles/signup.css'
import { useForm } from "react-hook-form";
import { Button } from 'rsuite';
import { Link } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';


function Login() {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => console.log(data);

    return (
        <div className="signup-container">
                <div className="login-title">
                    <span>Don't have an Account?
                        <Link to="/register" style={{color: '#ED5358', textDecoration: 'none'}}> Sign Up</Link>
                    </span>
                    <h3>Login</h3>
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
                            <label>Password</label>
                            <input 
                                name="password" 
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.password && <p>This field is required</p>}
                        </div>
                        
                        <div className="signup-btn-div">
                            <Button size="lg" onClick={handleSubmit(onSubmit)} className="btn"> Submit</Button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Login;
