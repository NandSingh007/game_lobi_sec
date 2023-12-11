import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/wallet.css'
import { MDBIcon } from 'mdb-react-ui-kit';
import img from '../Images/avtr2.jpeg'
const Wallet = () => {
    return (

        <>
            <div className='wallet_main_div'>
                <div className='inner_wallet_div_upper_divisoon'>
                    <div className='left_inner_wallet_div_upper_divisoon'>
                        <div className='transaction_histroys_wallet'>Total Case</div>
                        <div className='amounth_div_wallet'><img src={img} width='20px' alt="" />19.0</div>
                    </div>
                    <div className='right_inner_wallet_div_upper_divisoon'>
                        <Link to='/transactionhistory' className='transaction_history_link'>
                            Transaction History <MDBIcon fas icon="chevron-right" />
                        </Link>
                    </div>
                </div>
                <div className='inner_wallet_div'>
                    <div className='first_deposite'>
                        <div className='deposite_left_part_add_case_left_side_wali'>
                            <div className='deposite_left_part_add_case_left_side_wali_img_he'><img src={img} width='35px' alt="" /></div>
                            <div className=''>
                                <p className='deposit_rokhda'>left_</p>
                                <p className='rokhda'>$6683</p>
                            </div>
                        </div>
                        <div className='deposite_right_part_add_caseee'><Link to='#'><span>+ Add Case</span></Link></div>
                    </div>

                    <div className='first_deposite'>
                        <div className='deposite_left_part_add_case_left_side_wali'>
                            <div className='deposite_left_part_add_case_left_side_wali_img_he'><img src={img} width='35px' alt="" /></div>
                            <div className=''>
                                <p className='deposit_rokhda'>left_</p>
                                <p className='rokhda'>$6683</p>
                            </div>
                        </div>
                        <div className='deposite_right_part'><Link to='#'><span>s withdraw</span></Link></div>
                    </div>

                    <div className='first_deposite'>
                        <div className='deposite_left_part_add_case_left_side_wali'>
                            <div className='deposite_left_part_add_case_left_side_wali_img_he'><img src={img} width='35px' alt="" /></div>
                            <div className=''>
                                <p className='deposit_rokhda'>left_</p>
                                <p className='rokhda'>$6683</p>
                            </div>
                        </div>
                        <div className='deposite_right_part'><Link to='#'><span>Earn Bonus</span></Link></div>
                    </div>
                </div>
                <div className='inner_wallet_div_help_line'>
                    <h3 className='hep_heading_lin'>Help</h3>
                </div>
                <div className='inner_wallet_div_help'>
                    <div className='inner_wallet_div_feild'>
                        <div className='inner_wallet_div_feild_Payment'><img src={img} width='25px' alt="" /> TDS Certificates</div>
                        <div className='inner_wallet_div_feild_he'><MDBIcon fas icon="chevron-right" /></div>
                    </div>
                    <div className='inner_wallet_div_feild'>
                        <div className='inner_wallet_div_feild_Payment'><img src={img} width='25px' alt="" /> KYC Verification</div>
                        <div className='inner_wallet_div_feild_he'><MDBIcon fas icon="chevron-right" /></div>
                    </div>
                    <div className='inner_wallet_div_feild'>
                        <div className='inner_wallet_div_feild_Payment'><img src={img} width='25px' alt="" /> Help Desk</div>
                        <div className='inner_wallet_div_feild_he'><MDBIcon fas icon="chevron-right" /></div>
                    </div>
                    <div className='inner_wallet_div_feild'>
                        <div className='inner_wallet_div_feild_Payment'><img src={img} width='25px' alt="" /> Payment Setting</div>
                        <div className='inner_wallet_div_feild_he'><MDBIcon fas icon="chevron-right" /></div>
                    </div>
                    {/* <ul className='inner_wallet_div_ui'>
                        <Link to=""><li className='inner_wallet_div_list'><img src={img} width='25px' alt="" /> TDS Certificates</li></Link>
                        <Link to=""><li className='inner_wallet_div_list'><img src={img} width='25px' alt="" /> KYC Verification</li></Link>
                        <Link to=""><li className='inner_wallet_div_list'><img src={img} width='25px' alt="" /> Help Desk</li></Link>
                        <Link to=""><li className='inner_wallet_div_list'><img src={img} width='25px' alt="" /> Payment Setting</li></Link>
                    </ul> */}
                </div>
            </div>
        </>
    )
}

export default Wallet