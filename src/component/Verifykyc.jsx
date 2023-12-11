// import { CContainer } from '@coreui/react'
import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../styles/Verifykyc.css'
import img from '../Images/casino.jpeg'

const Verifykyc = () => {
  return (
    <>
      <div className='verify_main_div'>
        <div className='kyc_div'>
          <div className='pancard_img'><img src={img} width='27px' alt="" /></div>
          <div className='pancard_Text'>
            <p className='Big_text_Para'>PanCard</p>
            <p className='instant_verification'>Instant Verification</p>
          </div>
          <div className='arrow_icon'>
            <Link to="/kyc_page"> <MDBIcon fas icon="chevron-right" /></Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Verifykyc