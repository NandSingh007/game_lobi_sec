import React from 'react'
import img from '../Images/casino.jpeg'
import '../styles/KycForm.css'
const Kyc_page = () => {
    return (
        <>
            <div className='upload_pan_card_div'>
                <div className='upload_form_input'>
                    <form action="">
                        <label id='laber_kvc' htmlFor="photo">Upload Photo</label>
                        <input id='input_id' type="file" name='photo' style={{ width: '100%' }} accept="image/*" />

                        <label id='laber_kvc' htmlFor="panNumber">Enter PAN Number</label>
                        <input id='input_id' type="text" name='panNumber' placeholder='Enter PAN Number' />

                        <label id='laber_kvc' htmlFor="nameAsPerPan">Enter name as per PAN Card</label>
                        <input id='input_id' type="text" name='nameAsPerPan' placeholder='Enter Name' />

                        <label id='laber_kvc' htmlFor="dob">Date of Birth</label>
                        <input id='input_id' type="date" name='dob' placeholder='Enter Date of Birth' />

                        <p className='form_btn_pvc'>
                            <button className='btn btn-primary' type="submit">Submit</button>
                        </p>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Kyc_page