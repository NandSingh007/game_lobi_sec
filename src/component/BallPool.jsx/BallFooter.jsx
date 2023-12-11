import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import './ballStyles/BallFooter.css'
const BallFooter = () => {
    return (
        <>
            <div className='BallPool_footer'>
                <div className='Ballpool_first'>
                    <Link to='/Games'>
                        <p className="Ballpool_footer_icon"><MDBIcon fas icon="dice-d20" /></p>
                        <p className="Ballpool_footer_text">Games</p></Link>
                </div>
                <div className='Ballpool_first'>
                    <Link to='/refer'>
                        <p className="Ballpool_footer_icon"><MDBIcon fas icon="certificate" /></p>
                        <p className="Ballpool_footer_text">Refer & Earn</p>
                    </Link>
                </div>
                <div className='Ballpool_first'>
                    <Link> <p className="Ballpool_footer_icon"><MDBIcon fas icon="ribbon" /></p></Link>
                </div>
                <div className='Ballpool_first'>
                    <Link to='/Leaderboard'>
                        <p className="Ballpool_footer_icon"><MDBIcon fas icon="chart-line" /></p>
                        <p className="Ballpool_footer_text">Leaderboard</p></Link>
                </div>
                <div className='Ballpool_first'>
                    <Link to='/History'>
                        <p className="Ballpool_footer_icon"><MDBIcon far icon="clock" /></p>
                        <p className="Ballpool_footer_text">History</p></Link>
                </div>
            </div>
        </>
    )
}

export default BallFooter