import React from 'react'
import img from '../Images/poker.jpeg'
import '../styles/account.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
const Account = () => {
    return (
        <>
            <div className='profile_account'>
                <div className='profile_account_second_dov'>
                    <div className='avtar_profile'>
                        <img src={img} alt="" />
                    </div>
                    <div className='profile_intro'>
                        <h5 className='my_names'>Shubham Singh</h5>
                        <h6 className='my_user_name'>fyydkkjh</h6>
                        <p className='edit_pro'><Link to="/editprofile">edit</Link></p>
                    </div>
                </div>

                <h4 className='Scorecard_d'>Scorecard</h4>
                <div className='scorecard'>
                    <div className='box1_games'>
                        <p className='icon_win'><MDBIcon fas icon="dice" size='lg' /></p>
                        <span>89</span>
                        <p className='Game_payed_text' style={{ marginBottom: "0px" }}>Games Played</p>
                    </div>
                    <div className='box2_win'>
                        <p className='icon_win'><MDBIcon fas icon="trophy" size='lg' /></p>
                        <span>89</span>
                        <p className='Game_payed_text' style={{ marginBottom: "0px" }}>Games Played</p>
                    </div>
                </div>

                <div className='played_games'>
                    <h4>Games Played</h4>
                </div>

            </div>
        </>
    )
}

export default Account