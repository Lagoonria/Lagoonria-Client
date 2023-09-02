import React from 'react';
import '../../../assets/styles/_variables.css';


import { BackTop, Button, Typography } from 'antd';
import { UpSquareOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
const { Title } = Typography;

const AppFooter = () => {

  const customButtonStyle = {
    backgroundColor: 'var(--green_shades_3)',
    color: 'var(--white_1)',
  };

  return (
    <div className='app-footer-layout'>

      <div className='footer-data'>

        <div className='contact-details'>
          <Title level={5}>Get in touch</Title>
          <p className='contact-heading'>Email</p>
          <p className='contact-data'>lagoonria@gmail.com</p>
          <p className='contact-heading'>Call Us</p>
          <p className='contact-data'>011 3456790</p>
        </div>
        <div className='social-media'>
          <Title level={5}>Social Media</Title>
          <div className='social-links'>
            <Button size='large' style={customButtonStyle} shape="circle" icon={<FacebookOutlined />} />
            <Button size='large' style={customButtonStyle} shape="circle" icon={<InstagramOutlined />} />
            <Button size='large' style={customButtonStyle} shape="circle" icon={<YoutubeOutlined />} />
          </div>
        </div>
        <div className='address'>
          <Title level={5}>Where we are</Title>
          <p className='address-heading'>Address</p>
          <p className='address-data'>Lagoon Board Service, Mathara road, Dikwella.</p>
        </div>

      </div>

      <div className='copyright'>
        <p>Copyright © 2021-2023 Lagoon Boart Service. All Rights Reserved.</p>
        <BackTop>
          <Button size='large' style={customButtonStyle} shape="circle" icon={<UpSquareOutlined />} />
        </BackTop>
      </div>

    </div>
  )
}

export default AppFooter;