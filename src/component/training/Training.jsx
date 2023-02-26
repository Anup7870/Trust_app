import React from 'react'
import { Link } from 'react-router-dom'
export default function Training() {
    const Alert =()=>{
        const confiremed= window.alert("YOu will be redirected to the EXternal website")
        if(confiremed){
         
         window.location='/provider';
     }
     }
  return (
    <div className='dahboard'>
            <div className="dasboardWrapper">
                <div className="dashLeft  sticky-sm-top">
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
                                                <a className="navbar-brand" href="#">Training</a>
                                            </div>
                                        </nav>
                                        
                                    </div>
                                    <div className="coursesItem">
                                        <div className="courseCard">
                                            <img src={process.env.PUBLIC_URL+'/items/image/train.jpg'}alt="JOBS" srcset="" />
                                            <div className="jobinfo">
                                                <h5>Comany name</h5>
                                                <span>location</span>
                                                <span>Category</span>
                                            </div>
                                            <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>   
                                        </div>
                                        <div className="courseCard">
                                            <img src={process.env.PUBLIC_URL+'/items/image/train.jpg'}alt="JPBS" srcset="" />
                                            <div className="jobinfo">
                                                <h5>Comany name</h5>
                                                <span>location</span>
                                                <span>Category</span>
                                            </div>

                                            <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>   
                                        </div>
                                        <div className="courseCard">
                                            <img src={process.env.PUBLIC_URL+'/items/image/train.jpg'} alt="JOBS" srcset="" />
                                            <div className="jobinfo">
                                                <h5>Comany name</h5>
                                                <span>location</span>
                                                <span>Category</span>
                                            </div>
                                            <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>   
                                        </div>
                                        <div className="courseCard">
                                            <img src={process.env.PUBLIC_URL+'/items/image/train.jpg'} alt="JOBS" srcset="" />
                                            <div className="jobinfo">
                                                <h5>Comany name</h5>
                                                <span>location</span>
                                                <span>Category</span>
                                            </div>
                                            <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>
                                        </div>
                                        <div className="courseCard">
                                            <img src={process.env.PUBLIC_URL+'/items/image/train.jpg'} alt="JOBS" srcset="" />
                                            <div className="jobinfo">
                                                <h5>Comany name</h5>
                                                <span>location</span>
                                                <span>Category</span>
                                            </div>
                                            <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>   
                                        </div>
                                        <div className="courseCard">
                                            <img src={process.env.PUBLIC_URL+'/items/image/train.jpg'} alt="jobs" srcset="" />
                                            <div className="jobinfo">
                                                <h5>Comany name</h5>
                                                <span>location</span>
                                                <span>Category</span>
                                            </div>
                                            <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
  )
}
