import React from 'react';
import './SignUp.scss';
import {Link} from 'react-router-dom';
import firebase from 'firebase'




class SignUp extends React.Component {

    state={
        username:'',
        email:'',
        password:'',
        passwordConfirmation:'',
        errors:[],
        usersRef: firebase.database().ref('users')
    }



//handleSubmit

handleSubmit=event=>{
    event.preventDefault();


 if(this.isFormValid()){
     this.setState({errors:[]});


    firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser)=>{
            console.log('USER SUCCESSFULLY CREATED', createdUser);
            createdUser.user.updateProfile({

                displayName: this.state.username,
                email: this.state.email
            
            })
            .then(()=>{
                this.saveUser(createdUser).then(()=>{
                    alert('User saved');
                })
            }).catch(err=>{
                console.log(err);
                this.setState({errors: this.state.errors.concat(err)})
            })
        }).catch((err)=>{
            alert.error(err);
            this.setState({errors: this.state.errors.concat(err)})
        })
}
}



//FORM VALIDATION FOR HANDLESUBMIT

isFormValid(){
    let error;
    let errors=[];

    if(!this.isPasswordValid(this.state)){
        error={message: 'Password is invalid'};
        this.setState({errors: errors.concat(error)});
        
        return false; 
    }else
        if(this.isFormEmpty(this.state)){
        error={message: 'Fill in all fields'};
        this.setState({errors: errors.concat(error)});

        return false
    }else
        return true

}


//Form Empty

isFormEmpty ({username, passwordConfirmation, password, email}){
    return !username.length || !password.length || !passwordConfirmation.length || !email.length
}

//is Password Valid

isPasswordValid = ({password, passwordConfirmation})=>{
    if(password.length < 6 || passwordConfirmation.length < 6 ){
        return false
    }else if (password !== passwordConfirmation){
        return false
    }else {
        return true;
    }
}

//Save User
    saveUser = createdUser=>{
        return this.state.usersRef.child(createdUser.user.uid).set({
            name:createdUser.user.displayName,
            avatar: createdUser.user.photoURL
        });
    }




// handleChange
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }




//error messages for users 
displayErrors = errors =>errors.map((error, i )=> <p key={i}>{error}</p>)

render(){
    const {username, email, password, passwordConfirmation} = this.state;
    return (
        <div className='signup'>
             <Link to='/'>
           <img
           src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/logo.png"
           alt=''
           className=''
           />
           </Link>
            <div className='signup_detail'>
                <form className='signup_form' onSubmit={this.handleSubmit}>
                    <h2 className='netflix_signup_lbl'>Sign Up</h2>

                    <input
                        name='username'
                        type='text'
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange}
                        required
                        className='input-option'
                        autoComplete='off'
                    />
                    

                    <input
                        name='email'
                        type='email'
                        placeholder="Email or phone number"
                        value={email}
                        onChange={this.handleChange}
                        required
                        className='input-option'
                        autoComplete='off'
                    />
                    <input
                        name='password'
                        type='password'
                        placeholder="Password"
                        value={password}
                        onChange={this.handleChange}
                        required
                        className='input-option'
                        autoComplete='off'
                    />
                    <input
                        name='passwordConfirmation'
                        type='password'
                        placeholder="Confirm Password"
                        value={passwordConfirmation}
                        onChange={this.handleChange}
                        required
                        className='input-option'
                        autoComplete='off'
                    />
                    <button type='submit'>Sign Up</button>
                </form>

               
                    <h6 className='link-to-signin'>Already have an account?
                    <Link to='/signin' className='actual-signin-link'>
                        <span >Sign In now</span> 
                    </Link>
                    </h6>

                    <br/>
                    <br/>
                    <br/>
                    
            </div>


        </div>
    )
}
}

export default SignUp
