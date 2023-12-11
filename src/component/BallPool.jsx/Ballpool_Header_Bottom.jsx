import React, { useState } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import './ballStyles/BallPool.css'
const Ballpool_Header_Bottom = () => {

    const [activeTab, setActiveTab] = useState('Player');

    const refralHandle = () => {
        setActiveTab('Player');
        // Add your specific logic for the "left_refer_friends" tab here
    };

    const EarningHandle = () => {
        setActiveTab('How to play');
        // Add your specific logic for the "baller_right_my_earning" tab here
    };

    return (
        <>
            <div className="bodyyyyyy">
                <div className="ball_refer_earn_header">
                    <div
                        className={`ball_left_refer_frineds ${activeTab === 'Player' ? 'active' : ''}`}
                        onClick={refralHandle}
                    >
                        <MDBIcon fas icon="user-plus" /> Refer Friends
                    </div>
                    <div
                        className={`ball_right_my_earning ${activeTab === 'How to play' ? 'active' : ''}`}
                        onClick={EarningHandle}
                    >
                        <MDBIcon fas icon="money-bill-alt" /> My Earning
                    </div>
                </div>
                {
                    activeTab === "Player" ?
                        <div className='ball_pooler_larger_conatiner'>
                            <div className='Ball_pool_Main_din'>
                                <div className='Ball_pool_Price_Box'>
                                    <div className='left_price_and_icon'>
                                        <p className='battle'>battle</p>
                                        <p className='price_battle'>R-367</p>
                                        <p className='small_text_of_battle'>* online</p>
                                    </div>
                                    <div className='right_price_btn'>
                                        <span className='twoplayer'>first</span>
                                        <span className='player_game_price'>Second</span>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        : ''
                }
                {
                    activeTab === "How to play" ? <div className='ball_pooler_larger_conatiner'>earning</div> : ''
                }

            </div>
        </>
    )
}

export default Ballpool_Header_Bottom