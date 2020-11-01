import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import './App.css';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import { auth } from './firebase/firebase';
import HomePage from './HomePage/HomePage';
import {setUser,clearUser} from './Redux/actions/userAction';



function App({setUser, clearUser, currentUser}) {

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user)
            }else{
                clearUser(user)
            }
        })
    },[setUser, clearUser])

    return (
        <div className='app'>
           <Switch>
               <Route exact path='/'        component={HomePage}/>
               <Route      path="/signin"   component={ SignIn}/> 
               <Route     path="/signup"  component={ SignUp }/>
           </Switch>
        </div>
        
    )
}


const mapStateToProps = state=>({
    currentUser: state.user.currentUser
});
const mapDispatchToProps = dispatch=>({
    setUser: (user)=> dispatch(setUser(user)),
    clearUser: ()=>dispatch(clearUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
