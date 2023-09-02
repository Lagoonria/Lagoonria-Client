import React from 'react'
import '../../../assets/styles/_variables.css';
import { PlayCircleOutlined } from '@ant-design/icons';

import { Typography, Button } from 'antd';
const { Title } = Typography;

const Hero = () => {

    const customButtonStyle = {
        backgroundColor: 'var(--green_shades_3)',
        color: 'var(--white_1)',
    };

    const customTypoStyle = {
        color: 'var(--white_1)'
    };

    return (
        <div id='hero' className='hero-layout'>
            <div className="hero-content">
                <Title level={4} style={customTypoStyle}>A Boat is like a magic world, Like a little island.</Title>
                <div className="hero-buttons">
                    <Button type="primary" size="medium" style={customButtonStyle}>Register</Button>
                    <Button size="medium" icon={<PlayCircleOutlined />}>watch a Demo</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero