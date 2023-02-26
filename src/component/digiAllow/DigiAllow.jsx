import React from 'react'
import Naviagte from '../navigateButton/Naviagte'
import './digialow.css'
import ArrowForward from '@mui/icons-material/ArrowForward'
import {  Link } from "react-router-dom";

export default function DigiAllow() {
  return (
    <>
    <Naviagte/>
    <div className="digiAllow">
        <div className="digiAllowWrapper">
            <div className="logo">
                <img src="https://img1.digitallocker.gov.in/assets/img/digiLocker-Medium.png" alt="" srcset="" />
            </div>
            <h3>Ekstep digilocker intergration</h3>
            <p>You are about to link our digilocker account with EkStep Digilocker integration application of Ekstep. You will be signup for Digilocker account if it does not exist
            </p>
            <div className="aadhatInput">
                <h4>Enter Aadhar number to continue with Digilocker</h4>
                <input type="text" />
              <Link to="/dash"> <div className="buttonAadhar">   <span>Next</span><ArrowForward className="arrow"/></div></Link> 
            </div>
        </div>
    </div>
    </>
  )}