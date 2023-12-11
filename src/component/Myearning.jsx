import React from 'react'
import '../styles/Myearning.css'
import { MDBIcon } from 'mdb-react-ui-kit';
const Myearning = () => {
  return (
    <>
      <div className='my_earning'>
        <div className='center_part_of_earn'>
          <div className=''>
            {/* <MDBIcon fas icon="rupee-sign" /> */}
            <MDBIcon fas icon="rupee-sign" color='white' size='5x' />
          </div>
          <div className='head_of_earn'>No Earning</div>
          <div className='text_of_earn'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        </div>
      </div>
    </>
  )
}

export default Myearning