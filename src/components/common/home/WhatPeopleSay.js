import React from 'react'
import { RightOutlined, LeftOutlined, UserOutlined } from '@ant-design/icons';

import { Typography, Button, Avatar } from 'antd';
const { Title } = Typography;

const WhatPeopleSay = () => {

  const customButtonStyle = {
    backgroundColor: 'var(--green_shades_3)',
    color: 'var(--white_1)',
    border: 'none'
  };

  return (
    <div id='whatpeoplesay' className='people-feedback-layout'>
      <div className='people-feedback-header'>
        <Title level={4}>What people say about us</Title>
      </div>
      <div className='people-feedback'>

        <div className='feedback-left'>
          <Button style={customButtonStyle} size='large' shape="circle" icon={<LeftOutlined />} />
        </div>

        <div className='feedback-middle'>

          <Avatar size={64} icon={<UserOutlined />} />
          <p className='people-name'>K.I.Udara</p>
          <p className='people-position'>CEO AT ABCD, Sri Lanka</p>
          <p className='people-feedback'>Outstanding boat service! Impeccable attention to detail, friendly crew, and unforgettable experiences on the water. Highly recommend for all enthusiasts.</p>

        </div>

        <div className='feedback-right'>
          <Button style={customButtonStyle} size='large' shape="circle" icon={<RightOutlined />} />
        </div>

      </div>
    </div>
  )
}

export default WhatPeopleSay;