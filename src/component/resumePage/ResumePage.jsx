import React from 'react'
import './resumePage.css'
export default function ResumePage() {
    return (
        <div className="resumePage">
             <div className="nav"><h4>Resume</h4></div>
             <div className="container">
             <div className="resumeItems">
                <div className="education">
                    <div className="heading">
                        <h2>Education</h2>
                        <div className="line"></div>
                    </div>
                    <div className="container">
                        <ul className='resumei'>
                        <li>10th from DAV public school</li>
                        <li>12 from ST. Paul college</li>
                        </ul>
                    </div>
                </div>
                <div className="skills">
                    <div className="heading">
                        <h2>SKILLS</h2>
                        <div className="line"></div>
                    </div>
                    <div className="container">
                    <ul className='resumei'>
                        <li>C++</li>
                        <li>JavaScript</li>
                        <li>React js</li>
                    </ul>
                    <input className='resumeInput' type="text" placeholder='Add More skills'  />
                    </div>
                </div>
                <div className="project">
                    <div className="heading">
                        <h2>Projects</h2>
                        <div className="line"></div>
                    </div>
                    <div className="container">
                        <ul className='resumei'>
                            <li>Path finder<br/>
                                <span>link:-  <a href='/'>www.abc.com</a></span>
                            </li>
                            <li>Facebook clone<br/>
                                <span>link:-  <a href='/'>www.abc.com</a></span>
                            </li>
                            <li>Path finder<br/>
                                <span>link:-  <a href='/'>www.abc.com</a></span>
                            </li>
                        </ul>
                        <input className='resumeInput' type="text"  placeholder='Add more project'/>
                    </div>
                </div>
             </div>
            
                <div className="document">
                    <div className="heading">
                        <h2>Education</h2>
                        <div className="line"></div>
                    </div>
                    <div className="certifcates">
                        <div className="container">
                            <div className="cert">
                            <img src={process.env.PUBLIC_URL +'/items/image/cer.webp'} alt="" className="cer" />
                            <img src={process.env.PUBLIC_URL +'/items/image/cer.webp'} alt="" className="cer" />
                            <img src={process.env.PUBLIC_URL +'/items/image/cer.webp'} alt="" className="cer" />
                            <img src={process.env.PUBLIC_URL +'/items/image/cer.webp'} alt="" className="cer" />
                            </div>
                            
                        </div>
                    </div>
                </div>
             </div>
        </div>
       
    )
}
