import React from 'react';
import './styles/login.css'
import './styles/signup.css'
import Header2 from './Header2';
import { useForm } from "react-hook-form";
import { Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


function Login() {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => console.log(data);

    return (
        <div className="login-bg">
            <Header2 />
            <div className="signup-container">
                <div className="login-title">
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
        </div>
    )
}

export default Login;
