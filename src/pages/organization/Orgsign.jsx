import React from 'react'
import './orgsign.css'
import {Link} from 'react-router-dom'
export default function Signup() {
  return (
    <div className='signup'>
        <div className="signupWrapper">
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder="Company Name" />
                <input type="text" placeholder="regiteration Number" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
               <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}
