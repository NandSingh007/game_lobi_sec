import React from 'react'
import img from '../../Images/poker.jpeg'
import './LudoStyles/LudoHeader.css'
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
const LudoHeader = () => {
    return (
        <>
            <div className='LudoHeader' >
                <div className='LudoHeader_Upper_Part'>
                    <div className='left_part_of_LudoHeader_Upper_Part'><Link to="/"><MDBIcon fas icon="arrow-left" style={{ color: 'white' }} /></Link></div>
                    <div className='Right_part_of_LudoHeader_Upper_Part'>
                        <div className='header_amonut_Ludo'>
                            <p className='header_number_Ludo'>10.00</p><p className='header_number_Ludo'>0.00</p>
                        </div>
                    </div>
                </div>
                <div className='LudoHeader_Lower_Part_'>
                    <div className='LudoHeader_Lower_Part_img'><img src={img} alt="" /></div>
                    <div className=''><p className='upper_para_Ludo'>8 Ball Pool</p><p className='lower_part_Ludo'>Strick,Glide & Cue the balls</p></div>
                </div>
            </div>
        </>
    )
}

export default LudoHeader