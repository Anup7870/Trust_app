import React from 'react'
import './navigate.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Naviagte() {
  return (
    <div className='button'>
      <div className="buttonCont">
        <div className="item"><ArrowForwardIcon className="flip"/><span>Back</span></div>
      </div>
    </div>
  )
}             
