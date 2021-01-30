import React, { useState } from 'react';
import { auth, db } from "../firebase";
import './styles/signup.css'
import {useHistory} from "react-router-dom"
import { useForm } from "react-hook-form";
import { Button, Alert } from 'rsuite';
// import { generateUserDocument} from '../firebase'
import 'rsuite/dist/styles/rsuite-default.css';
import Header1 from './Header1';


function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false);
    const history = useHistory('');

    const onSubmit = async (data, event) => {
        setLoading(true)
        console.log(data);
        event.preventDefault();
        const {email, password, firstName, lastName, gender} = data;

        try{
            await auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth.user){
                    
                    db.collection('users').doc(auth.user.uid).set({
                        uid: auth.user.uid,
                        email: auth.user.email,
                        displayName: firstName + " " + lastName,
                        gender
                    })
                    Alert.success('Sign Up successful', 5000)
                    history.push('/menu')  
                }
            })
          }
          catch(e){
            Alert.error(e.message, 5000)
            console.log('Error Signing up with email and password', e);
            setLoading(false)
        }

    }

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
                                ref={register ({required: true}) }  />
                            {errors.lastName && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Email</label>
                            <input 
                                name="email" 
                                defaultValue="" 
                                ref={register ({required: true}) }/>
                            {errors.email && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Password</label>
                            <input 
                                name="password" 
                                type="password" 
                                defaultValue="" 
                                ref={register ({required: true}) }/>
                            {errors.password && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Phone Number</label>
                            <input 
                                name="phone"
                                type='number'
                                defaultValue="" 
                                ref={register ({required: true}) } 
                            />
                            {errors.phone && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Delivery Address</label>
                            <input 
                                name="address" 
                                defaultValue="" 
                                ref={register ({required: true}) } 
                            />
                            {errors.address && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                            <label>Gender</label>
                            <select ref={register} name="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && <p>This field is required</p>}
                        </div>
                        <div className="signup-btn-div">
                            <Button loading={loading} size="lg" onClick={handleSubmit(onSubmit)} className="btn"> Submit</Button>
                        </div>
                    </form>
                </div>
        </div>
            </div>
        </div>
    )
}

export default SignUp;
