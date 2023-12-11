import React, { useState, useRef, useCallback, useEffect } from 'react';
import Avatar from 'react-avatar';
import '../styles/editprofile.css';
import '../styles/AvatarSlider.css';
// import avt1 from '../Images/avtr1.jpeg';
// import avt2 from '../Images/avtr2.jpeg';
import Cookies from 'js-cookie';

import { useDispatch, useSelector } from 'react-redux';
const EditProfile = () => {
    const dispatch = useDispatch();
    const { api1Data } = useSelector((state) => state.add);
    // console.log(api1Data)
    const imageContainerRef = useRef(null);
    const cookiesData = Cookies.get('profiledata');
    const [profiledata, setProfiledata] = useState(() => {
      // Initialize the state with data from cookies or default values
      return cookiesData ? JSON.parse(cookiesData) : {
        name: '',
        username: '',
        updateNumber: '',
        selectedAvatar: 'https://s10.aconvert.com/convert/p3r68-cdx67/acp4y-6ophu-001.ico', // Default avatar URL
      };
    });
  
    useEffect(() => {
      // Save the updated data to cookies with a secure flag and a 2-minute expiration time
      Cookies.set('profiledata', JSON.stringify(profiledata), { secure: true, expires: 1 / 720 }); // 1 minute = 1 / 1440, 2 minutes = 1 / 720
    }, [profiledata]);
  
    // Display cookies data
    console.log(cookiesData, "cookiesData");
    // console.log("saSAD",profiledata)
    const handlechange = (e) => {
        const { name, value } = e.target;
        setProfiledata({ ...profiledata, [name]: value });
    };

    const handleAvatarClick = (avatar) => {
        setProfiledata({ ...profiledata, selectedAvatar: avatar });
    };
    const scroll = (direction) => {
        const container = imageContainerRef.current;
        const far = container.clientWidth / 2 * direction;
        const pos = container.scrollLeft + far;
        container.scrollTo({
            left: pos,
            behavior: 'smooth',
        });
    };

    const avatarImages = [
        'https://s10.aconvert.com/convert/p3r68-cdx67/acp4y-6ophu-001.ico',
        'https://s10.aconvert.com/convert/p3r68-cdx67/ate9g-zk6zn-001.ico',
        'https://s10.aconvert.com/convert/p3r68-cdx67/aalc0-aqd9v-001.ico',
        'https://s10.aconvert.com/convert/p3r68-cdx67/a5lwp-9vlvw-001.ico',
        'https://s10.aconvert.com/convert/p3r68-cdx67/a4zup-ctb6d-001.ico',
        'https://s10.aconvert.com/convert/p3r68-cdx67/acp4y-6ophu-001.ico',
    ];

    const submitdata = (e) => {
        e.preventDefault();
        // console.log(profiledata);
        dispatch({
            type: "FETCH_DATA_OF_PROFILE",
            payload: profiledata
        });
        setProfiledata({
            name: '',
            username: '',
            updateNumber: '',
            selectedAvatar: 'https://s10.aconvert.com/convert/p3r68-cdx67/acp4y-6ophu-001.ico',
        });
    }





    return (
        <>
            <div className='upload_pan_card_div_edit_profile'>
                <div className='upload_form_input_edit_profile'>
                    <div className='pro_img'>
                        <img src={profiledata.selectedAvatar} alt="" />
                    </div>
                    <div id="profile_avatar_slide" className="img_slide_avatara">
                        <div className="slider_wrapper">
                            <button className="prev" onClick={() => scroll(-1)}>
                                &#10094;
                            </button>
                            <div className="image-container" ref={imageContainerRef}>
                                {avatarImages.map((avatar, index) => (
                                    <div
                                        key={index}
                                        className={`image_slde ${avatar === profiledata.selectedAvatar ? 'selected' : ''}`}
                                        onClick={() => {
                                            handleAvatarClick(avatar);
                                        }}
                                    >
                                        <img src={avatar} width='45px' alt={`Avatar ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="next" onClick={() => scroll(1)}>
                                &#10095;
                            </button>
                        </div>
                    </div>
                    <form action='' className='form_box_div' onSubmit={submitdata}>
                        <label id='laber_kvc_edit' htmlFor='panNumber'>
                            Enter Name
                        </label>
                        <input id='input_id_edit' type='text' onChange={handlechange} name='name' value={profiledata.name} placeholder='Enter Name' />
                        <label id='laber_kvc_edit' htmlFor='panNumber'>
                            User Name
                        </label>
                        <input id='input_id_edit' type='text' onChange={handlechange} name='username' value={profiledata.username} placeholder='Enter Name' />
                        <label id='laber_kvc_edit' htmlFor='panNumber'>
                            Update Number
                        </label>
                        <input id='input_id_edit' type='number' onChange={handlechange} name='updateNumber' value={profiledata.updateNumber} placeholder='Update Number' />
                        <p className='form_btn_pvc'>
                            <button
                                className='btn'
                                type='submit'
                                style={{ backgroundColor: 'green', color: 'white' }}
                            >
                                Save
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
