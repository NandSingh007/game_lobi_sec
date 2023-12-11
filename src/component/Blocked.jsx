// import { CContainer } from '@coreui/react'
import React, { useState } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import '../styles/blocked.css'

const Blocked = () => {

    const [activeTab, setActiveTab] = useState('Reported User');

    const refralHandle = () => {
        setActiveTab('Reported User');
        // Add your specific logic for the "left_refer_friends" tab here
    };

    const EarningHandle = () => {
        setActiveTab('Blocked User');
        // Add your specific logic for the "right_my_earning" tab here
    };

    return (
        <>
             <div className="bodyyy_block">
            <div className="refer_earn_header_block">
                <div
                    className={`left_refer_frineds_block ${activeTab === 'Reported User' ? 'active' : ''}`}
                    onClick={refralHandle}
                >
                     Reported User
                </div>
                <div
                    className={`right_my_earning_block ${activeTab === 'Blocked User' ? 'active' : ''}`}
                    onClick={EarningHandle}
                >
                     Blocked User
                </div>
            </div>
            {
                activeTab === "Reported User" ? <div className="refer_earn_internal_div_block">
                    <h3 className="refer_your_frnds_heading_block">refer_your_frnds_heading</h3>
                    <div className="first_div_refreal_block">
                        <div className="first_div_refreal_left">dadas</div>
                        <div className="first_div_refreal_right"> amet consectetur adipisicing elit. Doloribus, optio?</div>
                    </div>
                    <div className="first_div_refreal_block">
                        <div className="first_div_refreal_left">dadas</div>
                        <div className="first_div_refreal_right">L amet consectetur adipisicing elit. Doloribus, optio?</div>
                    </div>
                    <div className="first_div_refreal_block">
                        <div className="first_div_refreal_left">dadas</div>
                        <div className="first_div_refreal_right">dolor sit, amet consectetur adipisicing elit. Doloribus, optio?</div>
                    </div>
                </div> : ''
            }
            {
                activeTab === "Blocked User" ? <div className='refer_earn_internal_div_block'>earning</div> : ''
            }

        </div>
        </>
    )
}

export default Blocked