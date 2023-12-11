// import { CContainer } from '@coreui/react'
import React, { useState } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import '../styles/transaction.css'
const Transaction_history = () => {
    const [activeTab, setActiveTab] = useState('Wallet');

    const refralHandle = () => {
        setActiveTab('Wallet');
        // Add your specific logic for the "left_refer_friends" tab here
    };

    const EarningHandle = () => {
        setActiveTab('Signup');
        // Add your specific logic for the "right_my_earning_transaction" tab here
    };
    return (

        <div className="bodyyy_transaction">
            <div className="refer_earn_header_transaction">
                <div
                    className={`left_refer_frineds_transaction ${activeTab === 'Wallet' ? 'active' : ''}`}
                    onClick={refralHandle}
                >
                    <MDBIcon fas icon="wallet" /> Wallet History
                </div>
                <div
                    className={`right_my_earning_transaction ${activeTab === 'Signup' ? 'active' : ''}`}
                    onClick={EarningHandle}
                >
                    <MDBIcon fas icon="hand-holding-usd" /> Payment History
                </div>
            </div>
            {
                activeTab === "Wallet" ? <div className="refer_earn_internal_div_transaction">
                    <div className="first_div_refreal_transaction">
                        <div className="first_div_refreal_left_transaction">
                            <p className='game_part'>Ludo</p>
                            <p className='deposite_part'> amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="first_div_refreal_right_transaction">
                            <p className='money_part'>+3.0</p>
                            <p className='date_part'>22/4/2023</p>
                        </div>
                    </div>
                    <div className="first_div_refreal_transaction">
                        <div className="first_div_refreal_left_transaction">
                            <p className='game_part'>Ludo</p>
                            <p className='deposite_part'> amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="first_div_refreal_right_transaction">
                            <p className='money_part'>+3.0</p>
                            <p className='date_part'>22/4/2023</p>
                        </div>
                    </div>
                    <div className="first_div_refreal_transaction">
                        <div className="first_div_refreal_left_transaction">
                            <p className='game_part'>Ludo</p>
                            <p className='deposite_part'> amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="first_div_refreal_right_transaction">
                            <p className='money_part'>+3.0</p>
                            <p className='date_part'>22/4/2023</p>
                        </div>
                    </div>
                    <div className="first_div_refreal_transaction">
                        <div className="first_div_refreal_left_transaction">
                            <p className='game_part'>Ludo</p>
                            <p className='deposite_part'> amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="first_div_refreal_right_transaction">
                            <p className='money_part'>+3.0</p>
                            <p className='date_part'>22/4/2023</p>
                        </div>
                    </div>
                    <div className="first_div_refreal_transaction">
                        <div className="first_div_refreal_left_transaction">
                            <p className='game_part'>Ludo</p>
                            <p className='deposite_part'> amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="first_div_refreal_right_transaction">
                            <p className='money_part'>+3.0</p>
                            <p className='date_part'>22/4/2023</p>
                        </div>
                    </div>
                    <div className="first_div_refreal_transaction">
                        <div className="first_div_refreal_left_transaction">
                            <p className='game_part'>Ludo</p>
                            <p className='deposite_part'> amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="first_div_refreal_right_transaction">
                            <p className='money_part'>+3.0</p>
                            <p className='date_part'>22/4/2023</p>
                        </div>
                    </div> <div className="first_div_refreal_transaction">
                        <div className="first_div_refreal_left_transaction">
                            <p className='game_part'>Ludo</p>
                            <p className='deposite_part'> amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="first_div_refreal_right_transaction">
                            <p className='money_part'>+3.0</p>
                            <p className='date_part'>22/4/2023</p>
                        </div>
                    </div>
                    <div className="first_div_refreal_transaction">
                        <div className="first_div_refreal_left_transaction">
                            <p className='game_part'>Ludo</p>
                            <p className='deposite_part'> amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="first_div_refreal_right_transaction">
                            <p className='money_part'>+3.0</p>
                            <p className='date_part'>22/4/2023</p>
                        </div>
                    </div>
                    <div className="first_div_refreal_transaction">
                        <div className="first_div_refreal_left_transaction">
                            <p className='game_part'>Ludo</p>
                            <p className='deposite_part'> amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="first_div_refreal_right_transaction">
                            <p className='money_part'>+3.0</p>
                            <p className='date_part'>22/4/2023</p>
                        </div>
                    </div>
                </div>
                    : ''
            }
            {
                activeTab === "Signup" ? <div className='refer_earn_internal_div_transaction'>Payment History</div> : ''
            }

        </div>
    )
}

export default Transaction_history