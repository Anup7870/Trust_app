import React from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import './dashboard.css'
import Course from '../../component/courses/Course'
export default function Dashboard() {
    return (
        <div className='dahboard'>
            <div className="dasboardWrapper">
                <div className="dashLeft">
                    <div className="dashlogo">
                        <h3 className='dashSideLogo'>EkStep</h3>
                    </div>
                    <div className="dashSideNav">
                        {/* <div className="nav">dashboard</div> */}
                        <Link to="/dash/profile" style={{ textDecoration: 'none' }}> <div className="nav">Profile</div></Link>
                       <Link to="/dash/library"style={{ textDecoration: 'none' }}> <div className="nav">Library</div></Link>
                       <Link to="/dash/resume"style={{ textDecoration: 'none' }}><div className="nav">Resume</div></Link> 
                        <div className="nav">Help</div>
                    </div>
                </div>
                <div className="dashRight ">
                    <div className="dashRightNav sticky-sm-top">
                        <ul>
                         <Link to="/dash"style={{ textDecoration: 'none' }}> <li>Course</li></Link>  
                          <Link to="/dash/jobs" style={{ textDecoration: 'none' }}> <li>Jobs</li></Link> 
                          <Link to="/dash/training" style={{ textDecoration: 'none' }}><li>Training</li></Link>
                        </ul>
                        <div className="dashRghtNavbtn">Logout</div>
                    </div>
                    <section className="dashboardRightContainer container">
                        <div className="courses container">
                        <Course/>
                        </div>
                        <div className="mentor"></div>
                        <div className="scholership"></div>
                    </section>
                </div>
            </div>
        </div>
    )
}
