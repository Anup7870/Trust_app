import React from 'react'
import "./DigiInfo.css"
import Naviagte from '../navigateButton/Naviagte'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Link } from "react-router-dom";

export default function DigiInfo() {
  return (
    <>
      <div className="digiInfo">
        <div className="digiInfoWrapper">
          <Naviagte />
          <div className="digilockerInfo">
            <div className="digilockerInfoWrapper">
              <div className="header">
                <p>To open an account in this platform you need to connect with Digilocker</p>
              </div>
              <div className="mainInfo">
                <div className="logo">
                  <img src="https://img1.digitallocker.gov.in/assets/img/digiLocker-Large.png" alt="" />
                  <section className="mainInfoContant">
                    <h3 className="mainInfoHeader">Connet your Digilocker with our platform account</h3>
                    <div className="mainInfoAttention">
                      <p>Your Addhar number shouild link to  your mobile number.If not click <a href="/">here</a></p>
                    </div>
                    <div className="mainInfoAware">
                      <p>By clicking on the connect now button you declared that you are fully-aware that you are submitting your adhaar-card
                        details to us, in order to complete the KYC for creating the your profile in our platform
                      </p>
                    </div>
                  </section>

                </div>
              </div>
              <Link to='/signup/link' >
                <div className="buttond">
                <ArrowForward className="arrow" />
                <span>Connet now</span>
              </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}
