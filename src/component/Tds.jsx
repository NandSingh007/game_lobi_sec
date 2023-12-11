import React from 'react'
import '../styles/tds.css'
import { MDBIcon } from 'mdb-react-ui-kit';

const Tds = () => {
  return (
    <>
      <div className='my_tds'>
        <div className='center_part_of_tds'>
          <div className=''>
            {/* <MDBIcon fas icon="rupee-sign" /> */}
            <MDBIcon fas icon="dice" color='white' size='5x'  />
          </div>
          <div className='head_of_tds'>No TDS Status</div>
          <div className='text_of_earn'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        </div>
      </div>
    </>
  )
}

export default Tds