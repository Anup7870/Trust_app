import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
export default function Signup() {
  return (
    <div className='signup'>
        <div className="signupWrapper">
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Link to="/signup/conf"><button>Sign Up</button></Link>
            </form>
        </div>
    </div>
  )
}
