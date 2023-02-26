import React from 'react'
import { Link } from 'react-router-dom'
import './library.css'
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
                                    <div className="navCourse">
                                        <nav className="navbar bg-body-tertiary">
                                            <div className="container-fluid">
                                                <a className="navbar-brand" href="#">Ongoing courses</a>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="flex">
                                        <div className="courseCard">
                                            <img src={process.env.PUBLIC_URL + '/items/image/image.png'} alt="" srcset="" />
                                            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusamus tenetur culpa.</p>
                                            <button className='btn btn-danger'>Cancel</button>
                                            <div className="bar  half"></div>
                                        </div>
                                    </div>
                                    <div className="navCourse">
                                        <nav className="navbar bg-body-tertiary">
                                            <div className="container-fluid">
                                                <a className="navbar-brand" href="#">Completed courses</a>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="flex">
                                    <div className="courseCard">
                                        <img src={process.env.PUBLIC_URL + '/items/image/image.png'} alt="" srcset="" />
                                        <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusamus tenetur culpa.</p>
                                        <button className='btn btn-primary'>Apply</button>
                                        <div className="bar"></div>
                                    </div>
                                    <div className="courseCard">
                                        <img src={process.env.PUBLIC_URL + '/items/image/image.png'} alt="" srcset="" />
                                        <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusamus tenetur culpa.</p>
                                        <button className='btn btn-primary'>Apply</button>
                                        <div className="bar"></div>
                                    </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mentor"></div>
                            <div className="scholership"></div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
