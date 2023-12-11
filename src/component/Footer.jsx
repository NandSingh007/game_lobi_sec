import React from 'react'
import { NavLink } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';


import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';


import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';



import { MDBIcon } from 'mdb-react-ui-kit'
import avt from '../Images/avttt.png'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
const Footer = () => {


    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };


    return (
        <>
            <div className='footer'>
                <div className='first'>
                    <NavLink to='/' onClick={() => handleItemClick('home')}>
                        <p className="footer_icon">{activeItem === 'home' ? <HomeIcon /> : <HomeOutlinedIcon />}</p>
                        <p className="footer_text">Home</p>
                    </NavLink>
                </div>
                <div className='first'>
                    <NavLink to='/refer' onClick={() => handleItemClick('refer')}>
                        <p className="footer_icon">{activeItem === 'refer' ? <VerifiedIcon /> : <VerifiedOutlinedIcon />}</p>
                        <p className="footer_text">Refer & Earn</p>
                    </NavLink>
                </div>
                <div className='first'>
                    <NavLink to='/' onClick={() => handleItemClick('profile')}>
                        <p className="footer_icon"><img src={avt} width='42px' alt="" /></p>
                    </NavLink>
                </div>
                <div className='first'>
                    <NavLink to='/wallet' onClick={() => handleItemClick('wallet')}>
                        <p className="footer_icon">{activeItem === 'wallet' ? <AccountBalanceWalletIcon /> : <AccountBalanceWalletOutlinedIcon />}</p>
                        <p className="footer_text">Wallet</p>
                    </NavLink>
                </div>
                <div className='first'>
                    <NavLink to='/account' onClick={() => handleItemClick('account')} >
                        <p className="footer_icon">{activeItem === 'account' ? <PersonIcon /> : <PersonOutlineOutlinedIcon />}</p>
                        <p className="footer_text">My Account</p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Footer