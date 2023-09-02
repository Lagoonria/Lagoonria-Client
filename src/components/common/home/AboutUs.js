import React from 'react';
import '../../../assets/styles/_variables.css';
import AboutUsImg from '../../../assets/images/AboutUs.png';

import { Typography } from 'antd';
const { Title } = Typography;

const AboutUs = () => {
  return (
    <div id='aboutus' className='aboutUs-layout'>
        <div class="aboutUs-text-container">
            <Title level={4}>About Us</Title>
            <p>Welcome to Lagoon Boat Safari! We're your premier destination for exceptional boating experiences. With a passion for the water and a dedication to customer satisfaction, we offer a range of services tailored to your desires. Our experienced crew ensures safety and comfort, while our diverse fleet guarantees the perfect vessel for your adventure, whether it's a serene cruise or an exciting fishing trip. We pride ourselves on personalized attention and responsible boating practices, ensuring both your enjoyment and the preservation of our aquatic environments. Discover the magic of the sea with Lagoon Boat Safari! – where every voyage is extraordinary.</p>
        </div>
        <img src={AboutUsImg} alt='' />
    </div>
  )
}

export default AboutUs;