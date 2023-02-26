import React from 'react'
import './profileele.css'
export default function ProfileEle() {
  return (
    <>
      <div className="profileele">
        <div className="profileeleLeft">
          <div className="profileeleLeftWrapper">
            <div className="img">
            </div>
            <div className="profileInfi">
              <div className="name">Dyna isoba</div>
              <div className="dob">24/06/2003</div>
              <div className="education">XYZ,university,abc</div>
              <div className="education">Delhi</div>
            </div>
          </div>
          <p>Sharable QR code</p>
          <div className="qr"></div>
        </div>
        <div className="profileeleRight">
          <div className="completedCourse">
            <div className="nav">Completed courses</div>
            <div className="course">
              <span>1. Introduction to HTML</span>
              <span>2. Advacne java script</span>
            </div>
            <div className="personalDetail">
              <div className="nav">Personal Detail</div>
              <form action="">
                <div className="name">
                  <span>Name</span>
                  <input type="text" Value="Dyna isoba" readOnly />
                </div>
                <div className="name">
                  <span>Father</span>
                  <input type="text" Value="Linkan roy" readOnly />
                </div>
                <div className="name">
                  <span>Mother</span>
                  <input type="text" Value="Manju devi" readOnly />
                </div>
                <div className="name">
                  <span>Adress</span>
                  <input type="text" value="Delhi, Noida sector 4" />
                </div>

              </form>
              <div id="chart_div"></div>
            


              <div className="nav">Achivements</div>
              <div className="achivements"><p>No record found</p></div>
              <div className="nav">Certificates</div>
              <div className="profileimg">
                <img src={process.env.PUBLIC_URL +"/items/image/cer.webp"} alt="" />
                <img src={process.env.PUBLIC_URL +"/items/image/cer.webp"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
