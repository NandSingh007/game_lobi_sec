import React, { useState } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import './LudoStyles/Ludo.css'
const LudoHedderpart = () => {



    const [activeTab, setActiveTab] = useState('PlayerLudo');

    const refralHandle = () => {
        setActiveTab('PlayerLudo');
        // Add your specific logic for the "left_refer_friends" tab here
    };

    const EarningHandle = () => {
        setActiveTab('How to play_ludo');
        // Add your specific logic for the "baller_right_my_earning" tab here
    };


    return (
        <>

            <div className="bodyyyyyyLudo">
                <div className="Ludo_refer_earn_header">
                    <div
                        className={`Ludo_left_refer_frineds ${activeTab === 'PlayerLudo' ? 'active' : ''}`}
                        onClick={refralHandle}
                    >
                        <MDBIcon fas icon="user-plus" /> Player
                    </div>
                    <div
                        className={`Ludo_right_my_earning ${activeTab === 'How to play_ludo' ? 'active' : ''}`}
                        onClick={EarningHandle}
                    >
                        <MDBIcon fas icon="money-bill-alt" /> How to Play
                    </div>
                </div>
                {
                    activeTab === "PlayerLudo" ?
                        <div className='Ludo_pooler_larger_conatiner'>
                            <div className='Ludo_pool_Main_din'>
                                <div className='Ludo_pool_Price_Box'>
                                    <div className='left_price_and_icon_Ludo'>
                                        <p className='battle_Ludo'>battle</p>
                                        <p className='price_battle_Ludo'>R-367</p>
                                        <p className='small_text_of_battle_Ludo'>* online</p>
                                    </div>
                                    <div className='right_price_btn_Ludo'>
                                        <span className='twoplayer_Ludo'>first</span>
                                        <span className='player_game_price_Ludo'>Second</span>
                                    </div>
                                </div>
                            </div>

                            <div className='Ludo_pool_Main_din'>
                                <div className='Ludo_pool_Price_Box'>
                                    <div className='left_price_and_icon_Ludo'>
                                        <p className='battle_Ludo'>battle</p>
                                        <p className='price_battle_Ludo'>R-367</p>
                                        <p className='small_text_of_battle_Ludo'>* online</p>
                                    </div>
                                    <div className='right_price_btn_Ludo'>
                                        <span className='twoplayer_Ludo'>first</span>
                                        <span className='player_game_price_Ludo'>Second</span>
                                    </div>
                                </div>
                            </div>


                            <div className='Ludo_pool_Main_din'>
                                <div className='Ludo_pool_Price_Box'>
                                    <div className='left_price_and_icon_Ludo'>
                                        <p className='battle_Ludo'>battle</p>
                                        <p className='price_battle_Ludo'>R-367</p>
                                        <p className='small_text_of_battle_Ludo'>* online</p>
                                    </div>
                                    <div className='right_price_btn_Ludo'>
                                        <span className='twoplayer_Ludo'>first</span>
                                        <span className='player_game_price_Ludo'>Second</span>
                                    </div>
                                </div>
                            </div>


                            <div className='Ludo_pool_Main_din'>
                                <div className='Ludo_pool_Price_Box'>
                                    <div className='left_price_and_icon_Ludo'>
                                        <p className='battle_Ludo'>battle</p>
                                        <p className='price_battle_Ludo'>R-367</p>
                                        <p className='small_text_of_battle_Ludo'>* online</p>
                                    </div>
                                    <div className='right_price_btn_Ludo'>
                                        <span className='twoplayer_Ludo'>first</span>
                                        <span className='player_game_price_Ludo'>Second</span>
                                    </div>
                                </div>
                            </div>



                            <div className='Ludo_pool_Main_din'>
                                <div className='Ludo_pool_Price_Box'>
                                    <div className='left_price_and_icon_Ludo'>
                                        <p className='battle_Ludo'>battle</p>
                                        <p className='price_battle_Ludo'>R-367</p>
                                        <p className='small_text_of_battle_Ludo'>* online</p>
                                    </div>
                                    <div className='right_price_btn_Ludo'>
                                        <span className='twoplayer_Ludo'>first</span>
                                        <span className='player_game_price_Ludo'>Second</span>
                                    </div>
                                </div>
                            </div>



                            <div className='Ludo_pool_Main_din'>
                                <div className='Ludo_pool_Price_Box'>
                                    <div className='left_price_and_icon_Ludo'>
                                        <p className='battle_Ludo'>battle</p>
                                        <p className='price_battle_Ludo'>R-367</p>
                                        <p className='small_text_of_battle_Ludo'>* online</p>
                                    </div>
                                    <div className='right_price_btn_Ludo'>
                                        <span className='twoplayer_Ludo'>first</span>
                                        <span className='player_game_price_Ludo'>Second</span>
                                    </div>
                                </div>
                            </div>



                            <div className='Ludo_pool_Main_din'>
                                <div className='Ludo_pool_Price_Box'>
                                    <div className='left_price_and_icon_Ludo'>
                                        <p className='battle_Ludo'>battle</p>
                                        <p className='price_battle_Ludo'>R-367</p>
                                        <p className='small_text_of_battle_Ludo'>* online</p>
                                    </div>
                                    <div className='right_price_btn_Ludo'>
                                        <span className='twoplayer_Ludo'>first</span>
                                        <span className='player_game_price_Ludo'>Second</span>
                                    </div>
                                </div>
                            </div>


                            <div className='Ludo_pool_Main_din'>
                                <div className='Ludo_pool_Price_Box'>
                                    <div className='left_price_and_icon_Ludo'>
                                        <p className='battle_Ludo'>battle</p>
                                        <p className='price_battle_Ludo'>R-367</p>
                                        <p className='small_text_of_battle_Ludo'>* online</p>
                                    </div>
                                    <div className='right_price_btn_Ludo'>
                                        <span className='twoplayer_Ludo'>first</span>
                                        <span className='player_game_price_Ludo'>Second</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ''
                }
                {
                    activeTab === "How to play_ludo" ? <div className='Ludo_pooler_larger_conatiner'>earning</div> : ''
                }

            </div>

        </>
    )
}

export default LudoHedderpart