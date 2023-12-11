import React from 'react'
import img from '../../Images/poker.jpeg'
import './ballStyles/BallHeader.css'
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
const BallHeader = () => {
    return (
        <>
            <div className='BallHeader' >
                <div className='BallHeader_Upper_Part'>
                    <div className='left_part_of_BallHeader_Upper_Part'><Link to="/"><MDBIcon fas icon="arrow-left" style={{ color: 'white' }} /></Link></div>
                    <div className='Right_part_of_BallHeader_Upper_Part'>
                        <div className='header_amonut'>
                            <p className='header_number'>10.00</p><p className='header_number'>0.00</p>
                        </div>
                    </div>
                </div>
                <div className='BallHeader_Lower_Part'>
                    <div className='BallHeader_Lower_Part_img'><img src={img} alt="" /></div>
                    <div className=''><p className='upper_para'>8 Ball Pool</p><p className='lower_part'>Strick,Glide & Cue the balls</p></div>
                </div>
            </div>
        </>
    )
}

export default BallHeader