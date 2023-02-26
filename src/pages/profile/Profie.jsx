import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'
import ProfileEle from '../../component/profileEle/ProfileEle'
export default function Training() {
    return (
        <div className='dahboard'>
            <div className="dasboardWrapper">
                <div className="dashLeft  sticky-sm-top">
                    <div className="dashlogo">
                        <h3 className='dashSideLogo'>EkStep</h3>
                    </div>
                    <div className="dashSideNav">
                        
                     <Link to="/dash/profile" style={{ textDecoration: 'none' }}> <div className="nav">Profile</div></Link>  
                     <Link to="/dash/library"style={{ textDecoration: 'none' }}> <div className="nav">Library</div></Link>
                       <Link to="/dash/resume"style={{ textDecoration: 'none' }}><div className="nav">Resume</div></Link> 
                       <div className="nav">Help</div>
                    </div>
                </div>
                <div className="dashRight ">
                    <div className="dashRightNav sticky-sm-top">
                        <ul>
                            <Link to="/dash" style={{ textDecoration: 'none' }}> <li>Course</li></Link>
                            <Link to="/dash/jobs" style={{ textDecoration: 'none' }}> <li>Jobs</li></Link>
                            <Link to="/dash/training" style={{ textDecoration: 'none' }}><li>Training</li></Link>
                        </ul>
                        <div className="dashRghtNavbtn">Logout</div>
                    </div>
                    <section className="dashboardRightContainer container">
                        <div className="courses container">
                            <div className='CoursesDiv'>
                                <div className="container">
                                   <ProfileEle/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

