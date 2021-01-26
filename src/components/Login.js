import React, {useState} from 'react';
import './styles/login.css'
import { auth} from "../firebase";
import {useHistory} from "react-router-dom"
import './styles/signup.css'
import Header2 from './Header2';
import { useForm } from "react-hook-form";
import { Button, Alert } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';



function Login() {
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false);
    const history = useHistory('');

    const onSubmit = async (data, event) => {
        setLoading(true)
        console.log(data);
        event.preventDefault();

        const {email, password} = data;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                Alert.success('Welcome back!', 5000)
                history.push('/menu')  
                })
          }
          catch(e){
            Alert.error(e.message === 'There is no user record corresponding to this identifier. The user may have been deleted.' && 'Wrong email or password', 5000)
            console.log('Error Signing up with email and password', e);
            setLoading(false)
        }
    }

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
                            <label>Email</label>
                            <input 
                                name="email" 
                                defaultValue="" 
                                ref={register ({required: true}) } 
                            />
                            {errors.email && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Password</label>
                            <input 
                                name="password"
                                type="password"
                                defaultValue="" 
                                ref={register ({required: true}) }                    />
                            {errors.password && <p>This field is required</p>}
                        </div>
                        
                        <div className="signup-btn-div">
                            <Button loading={loading} size="lg" onClick={handleSubmit(onSubmit)} className="btn"> Submit</Button>
                        </div>
                    </form>
                </div>
        </div>
        </div>
    )
}

export default Login;
