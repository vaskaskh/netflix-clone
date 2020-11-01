import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { clearUser } from '../Redux/actions/userAction';
import './NavBar.scss';


function NavBar({currentUser, clearUser}) {
    return (
        <div className='nav'>
            <Link to='/'>
                <img
                    className='nav_logo'
                    src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/logo.png"
                    alt=""
                />
            </Link>


            { currentUser ? (
                <Link  to='/' className='nav_signOut' onClick={()=>auth.signOut()} >                
                    Sign Out
                </Link>
            ):(
                <Link to='/signin' className='nav_signIn' >
                    Sign In
                </Link>
            )
            }
        </div>
    )
}


const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(NavBar)
