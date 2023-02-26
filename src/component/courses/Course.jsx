import React from 'react'
import './course.css'
import {Link} from 'react-router-dom'
export default function course() {
    const Alert =()=>{
       const confiremed= window.alert("YOu will be redirected to the EXternal website")
       if(confiremed){
        
        window.location='/provider';
    }
    }
   
    return (
        <div className='CoursesDiv'>
            <div className="container">
                <div className="navCourse">
                    <nav className="navbar bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">course</a>
                        </div>
                    </nav>
                </div>
                <div className="coursesItem">
                    <div className="courseCard">
                        <img src={process.env.PUBLIC_URL + '/items/image/image.png'} alt="" srcset="" />
                        <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusamus tenetur culpa.</p>
                   <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>   
                    </div>
                    <div className="courseCard">
                        <img src={process.env.PUBLIC_URL + '/items/image/image.png'} alt="" srcset="" />
                        <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusamus tenetur culpa.</p>
                        <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>   
                    </div>
                    <div className="courseCard">
                        <img src={process.env.PUBLIC_URL + '/items/image/image.png'} alt="" srcset="" />
                        <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusamus tenetur culpa.</p>
                        <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>   
                    </div>
                    <div className="courseCard">
                        <img src={process.env.PUBLIC_URL + '/items/image/image.png'} alt="" srcset="" />
                        <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusamus tenetur culpa.</p>
                        <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>   
                    </div>
                    <div className="courseCard">
                        <img src={process.env.PUBLIC_URL + '/items/image/image.png'} alt="" srcset="" />
                        <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusamus tenetur culpa.</p>
                        <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>   
                    </div>
                    <div className="courseCard">
                        <img src={process.env.PUBLIC_URL + '/items/image/image.png'} alt="" srcset="" />
                        <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusamus tenetur culpa.</p>
                        <Link to="/provider">  <button className='btn btn-primary' onClick={Alert}>Apply</button></Link>   
                    </div>
                </div>
            </div>

        </div>
    )
}
