import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import './LudoStyles/LudoFooter.css'
const LudoFooter = () => {
  return (
    <>
    <div className='LudoPool_footer'>
                <div className='Ludopool_first'>
                    <Link to='/Games'>
                        <p className="Ludopool_footer_icon"><MDBIcon fas icon="dice-d20" /></p>
                        <p className="Ludopool_footer_text">Games</p></Link>
                </div>
                <div className='Ludopool_first'>
                    <Link to='/refer'>
                        <p className="Ludopool_footer_icon"><MDBIcon fas icon="certificate" /></p>
                        <p className="Ludopool_footer_text">Refer & Earn</p>
                    </Link>
                </div>
                <div className='Ludopool_first'>
                    <Link> <p className="Ludopool_footer_icon"><MDBIcon fas icon="ribbon" /></p></Link>
                </div>
                <div className='Ludopool_first'>
                    <Link to='/Leaderboard'>
                        <p className="Ludopool_footer_icon"><MDBIcon fas icon="chart-line" /></p>
                        <p className="Ludopool_footer_text">Leaderboard</p></Link>
                </div>
                <div className='Ludopool_first'>
                    <Link to='/History'>
                        <p className="Ludopool_footer_icon"><MDBIcon far icon="clock" /></p>
                        <p className="Ludopool_footer_text">History</p></Link>
                </div>
            </div>
    </>
  )
}

export default LudoFooter