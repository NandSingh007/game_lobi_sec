import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import casino from '../Images/casino.jpeg';
import poker from '../Images/poker.jpeg';
import { CCarousel, CCarouselItem, CImage, CContainer, CRow, CCol } from '@coreui/react';
import img1 from '../Images/slideone.jpeg';
import img2 from '../Images/slidetwo.jpeg';
import img3 from '../Images/slidethree.jpeg'
import '../styles/body.css'
import casino_upper from '../Images/casino_left_upper.jpeg';
// import '../styles/slider.css'

const Body = () => {


    return (
        <>
            {/* <div className="container-fluid mt-5 mb-5 no-scroll"> */}
            <CContainer style={{ marginTop: "65px", marginBottom: "85px"  }}>
                <CCarousel>
                    <CCarouselItem>
                        <CImage className="d-block w-100" src={img1} height="60px" alt="slide 1" />
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100" src={img2} height="60px" alt="slide 2" />
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100" src={img3} height="60px" alt="slide 3" />
                    </CCarouselItem>
                </CCarousel>
                <div className='main_div'>
                    <div className='left_half'><Link to="#" ><img src={casino_upper} style={{ width: '100%', height: "210px", borderRadius: "10px" }} alt="" /></Link></div>
                    <div className='right_half'>
                        <div className='right_uper_img'><Link to="#" ><img src={casino} style={{ width: '100%', height: "100px", borderRadius: "10px" }} alt="" /></Link></div>
                        <div className='right_down_img'><Link to="#" ><img src={casino} style={{ width: '100%', height: "100px", marginTop: "10px", borderRadius: "10px" }} alt="" /></Link></div>
                    </div>
                </div>
                <div className='main_div'>
                    <div className='left_half'><Link to="#" ><img src={poker} style={{ width: '100%', height: "100px", borderRadius: "10px" }} alt="" /></Link></div>
                    <div className='right_half'>
                        <div className='right_uper_img'><Link to="/Casino" ><img src={casino} style={{ width: '100%', height: "100px", borderRadius: "10px" }} alt="" /></Link></div>
                    </div>
                </div>
                <div className='main_div'>
                    <div className='left_half'><Link to="/Ludo" ><img src={casino} style={{ width: '100%', height: "100px", borderRadius: "10px" }} alt="" /></Link></div>
                    <div className='right_half'>
                        <div className='right_uper_img'><Link to="/BallPool" ><img src={poker} style={{ width: '100%', height: "100px", borderRadius: "10px" }} alt="" /></Link></div>
                    </div>
                </div>
                <h3 style={{ textAlign: "left", fontFamily: "initial", fontWeight: "15px", fontWeight: "bold" }}>Upcoming Games</h3>
                <div className='main_div'>
                    <div className='last'><Link to="#" ><img src={casino} style={{ width: '100%', height: "100px", borderRadius: "10px" }} alt="" /></Link></div>
                </div>
            </CContainer >

        </>
    );
}

export default Body;
