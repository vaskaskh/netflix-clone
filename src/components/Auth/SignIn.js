import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import firebase from './../firebase/firebase';


class SignIn extends React.Component {
    state={
        email:'',
        password:'',
        errors:[],
    }



//handleSubmit

handleSubmit=event=>{
    event.preventDefault();

    if(this.isFormValid(this.state)){
        this.setState({errors:[]});


        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(signedInUser=>{
                console.log(signedInUser);
            }).catch(err=>{
                console.log(err);
                this.setState({
                    errors: this.state.errors.concat(err)
                })
            })
    }
}

//is Form Valid
    isFormValid=({email, password})=>{
        return email && password
    }
    
// handleChange
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

render(){
    return (
<div className='signin'>
            
           <Link to='/'>
           <img
           src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/logo.png"
           alt=''
           className=''
           />
           </Link>
            <div className='signin_detail'>
                <form className='signin_form' onSubmit={this.handleSubmit}>
                    <h2 className='netflix_signin_lbl'>Sign In</h2>
                    <input
                    name='email'
                        type='email'
                        placeholder="Email or phone number"
                        value={this.email}
                        onChange={this.handleChange}
                        required
                        className='input-option'
                    />
                    <input
                    name='password'
                        type='password'
                        placeholder="Password"
                        value={this.password}
                        onChange={this.handleChange}
                        required
                        className='input-option'
                    />
                   
                    <button type='submit'>Sign In</button>
                   
                </form>

               
                    <h6 className='link-to-signup'>New to Netflix?
                    <Link to='/signup' className='actual-signup-link'>
                        <span >Sign up now</span> 
                    </Link>
                    </h6>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            </div>


        </div>
    )
}
}

export default SignIn

