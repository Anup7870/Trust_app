import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
export default function Loginn() {
   return(
     <>
     <div className="logConatiner">
        <div className="lognWrapper">
            <div className="regincontent">
                <h1>Login</h1>
                <form className='fromLogin'>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="links">
                    <Link to="/dash"> <button type="submit" className="btns">Login</button></Link>
                    <Link to="/signup" className="">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
     </div>
     </>
    )
}
