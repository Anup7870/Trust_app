import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
export default function Landing() {
    return (
        <div className="main-container">
            <div className="nav1 df" id="nav">
                <div className="logo">
                <h2 className="logo-text">Ekstep</h2>
                </div>
                <div className="button-sec">
                    <Link to="/login"><button className="btntop">login</button></Link>
                </div>
            </div>
            {/* <!-- container section --> */}
            <div className="containers">
                <div className="login-section">
                <Link to='/signup'> <div className="card"><p>For Student</p></div></Link>   
                    {/* <div className="card"><p>Individual Teacher</p></div> */}
                  <Link to='/provider'> <div className="card"><p>Organization</p></div></Link> 
                </div>
                <div className="welcome">
                    <h3>Welcome!</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, sit? In enim itaque perferendis
                        odio autem esse nisi officia minus molestiae provident quas eligendi illo ad, aliquid optio dicta
                        nihil.</p>
                </div>
            </div>
        </div>
    )
}
