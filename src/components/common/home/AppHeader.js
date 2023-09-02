import React from 'react';
import '../../../assets/styles/_variables.css';

import { Button } from 'antd';

import Logo from '../../../assets/images/Logo.png';

const AppHeader = () => {

    const customButtonStyle = {
        backgroundColor: 'var(--green_shades_3)',
        color: 'var(--white_1)',
    };

    return (
        <div className='header-layout'>
            <div className='header'>

                <div className='header-logo'>
                    <img src={Logo} alt='' />
                </div>

                <div className='header-links'>
                    <a href="#hero">Home</a>
                    <a href="#aboutus">About Us</a>
                    <a href="#service">Service</a>
                    <a href="#whatpeoplesay">What people say</a>
                    <a href="#contactus">Contact us</a>
                </div>

                <div className='header-button'>
                    <Button style={customButtonStyle} size='medium'>Login</Button>
                </div>

            </div>
        </div>
    )
}

export default AppHeader;