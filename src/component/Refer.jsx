// import { CContainer } from '@coreui/react'
import React, { useState } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import '../styles/refer_friends.css'
const Refer = () => {
    const [activeTab, setActiveTab] = useState('referral');

    const refralHandle = () => {
        setActiveTab('referral');
        // Add your specific logic for the "left_refer_friends" tab here
    };

    const EarningHandle = () => {
        setActiveTab('earning');
        // Add your specific logic for the "right_my_earning" tab here
    };
    return (

        <div className="bodyyy">
            <div className="refer_earn_header">
                <div
                    className={`left_refer_frineds ${activeTab === 'referral' ? 'active' : ''}`}
                    onClick={refralHandle}
                >
                    <MDBIcon fas icon="user-plus" /> Refer Friends
                </div>
                <div
                    className={`right_my_earning ${activeTab === 'earning' ? 'active' : ''}`}
                    onClick={EarningHandle}
                >
                    <MDBIcon fas icon="money-bill-alt" /> My Earning
                </div>
            </div>
            {
                activeTab === "referral" ? <div className="refer_earn_internal_div">
                    <h3 className="refer_your_frnds_heading">refer_your_frnds_heading</h3>
                    <div className="first_div_refreal">
                        <div className="first_div_refreal_left">dadas</div>
                        <div className="first_div_refreal_right"> amet consectetur adipisicing elit. Doloribus, optio?</div>
                    </div>
                    <div className="first_div_refreal">
                        <div className="first_div_refreal_left">dadas</div>
                        <div className="first_div_refreal_right">L amet consectetur adipisicing elit. Doloribus, optio?</div>
                    </div>
                    <div className="first_div_refreal">
                        <div className="first_div_refreal_left">dadas</div>
                        <div className="first_div_refreal_right">dolor sit, amet consectetur adipisicing elit. Doloribus, optio?</div>
                    </div>
                </div> : ''
            }
            {
                activeTab === "earning" ? <div className='refer_earn_internal_div'>earning</div> : ''
            }

        </div>
    )
}

export default Refer