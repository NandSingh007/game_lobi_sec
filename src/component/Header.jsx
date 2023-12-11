import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
import '../styles/Header.css'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Header = () => {

    const [state, setState] = React.useState({
        left: false,
    });

    const [statsse, setStatsse] = React.useState('');
    const { api1Data } = useSelector((state) => state.add);
    // console.log("kakakak", api1Data)
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const navigate = useNavigate();
    const handleItemClick = (path) => {
        navigate(path);
    };





    useEffect(() => {
        const cookieValue = Cookies.get('profiledata');
        console.log('Cookie Value:', cookieValue);
        // setStatsse(cookieValue)
    }, []);

    // console.log("sdssadsdadssdasdadsadsds", cookieValue)




    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 190 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem key="profile" disablePadding style={{ paddingLeft: "10px" }} >
                    <Avatar>
                        {api1Data.selectedAvatar ? (
                            <img src={api1Data.selectedAvatar} alt="User Avatar" />
                        ) : (
                            <img src='https://s10.aconvert.com/convert/p3r68-cdx67/ak1o3-nuhaj-001.ico' alt="User Avatar" />
                        )}
                    </Avatar>
                    <Link to="/editprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemText style={{ padding: '0px 4px' }} primary={statsse.name ? statsse.name.charAt(0).toUpperCase() + api1Data.name.slice(1).toLowerCase() : ''} secondary={<span style={{ color: 'blue' }}>Edit</span>} />
                    </Link>
                </ListItem>
                {[{ text: 'My Earning', path: '/myearn', icon: <MDBIcon fas icon="dollar-sign" /> },
                { text: 'Verify KYC', path: '/verifykyc', icon: <MDBIcon fas icon="university" /> },
                { text: 'Refer and Earn', path: '/refer', icon: <MDBIcon fas icon="certificate" /> },
                { text: 'TDS Status', path: '/tds', icon: <MDBIcon fas icon="gift" /> },
                { text: 'Setting', path: '/setting', icon: <MDBIcon fas icon="cog" /> },
                { text: 'Help Desh', path: '/help', icon: <MDBIcon fab icon="hire-a-helper" /> },
                { text: 'Privacy Policy', path: '/privacy', icon: <MDBIcon fas icon="book-open" /> },
                { text: 'Terms ad Conditions', path: '/termconditions', icon: <MDBIcon fas icon="sticky-note" /> },
                { text: 'Fiar Play Police', path: '/fairpolice', icon: <MDBIcon fab icon="playstation" /> },
                { text: 'Refund Police', path: '/refund', icon: <MDBIcon fas icon="wallet" /> },
                { text: 'Reported/Block', path: '/Block', icon: <MDBIcon fas icon="user-times" /> },
                ].map(({ text, path, icon }, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handleItemClick(path)}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const anchor = 'left';


    return (
        <>
            <div className='header'>
                <div className='left_part_of_header'><MDBIcon fas icon="user-circle" size='lg' />
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}><MDBIcon fas icon="align-justify" /></Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                    <span className='game'>3 Game</span></div>
                <div className='Right_part_of_header'><div className='amonut'>
                    <p className='number'>10.00</p><p className='number'>0.00</p>
                </div>
                    <div className='icons'><p className='plus'><MDBIcon fas icon="plus" size='lg' /></p></div>
                </div>
                <div className='bell'>
                    <span className='bell' ><Link to='/notification'><MDBIcon far icon="bell" size='lg' /></Link></span>
                </div>
            </div>

        </>
    )
}

export default Header