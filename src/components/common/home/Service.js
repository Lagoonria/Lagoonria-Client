import React from 'react'

import Service1 from '../../../assets/images/Service1.jpg';
import Service2 from '../../../assets/images/Service2.jpg';
import Service3 from '../../../assets/images/Service3.jpg';

import { Row, Col, Typography, Card } from 'antd';
const { Meta } = Card;
const { Title } = Typography;

const Service = () => {

    return (
        <div id='service' className='service-layout'>
            <div className="service-layout-container">
                <div className="service-title">
                    <Title level={4}>
                        Our Services
                    </Title>
                </div>
                <div className='service-details'>
                    <Row gutter={[48, 16]}>
                        <Col md={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                            <Card
                                hoverable
                                cover={<img alt="Test" src={Service1} />}
                            >
                                <Meta title="Charter" description="Elevate your journey with our premier charter services. Experience luxury and exploration as we navigate the waters for unforgettable memories." />
                            </Card>
                        </Col>
                        <Col md={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                            <Card
                                hoverable
                                cover={<img alt="Test" src={Service2} />}
                            >
                                <Meta title="Shipyard" description="Crafting maritime excellence. From construction to maintenance, our shipyard blends tradition with innovation, creating vessels that exceed expectations." />
                            </Card>
                        </Col>
                        <Col md={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                            <Card
                                hoverable
                                cover={<img alt="Test" src={Service3} />}
                            >
                                <Meta title="Refit Services" description="Revitalize your vessel with our expert refit services. Transform and enhance every aspect for renewed performance and style." />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Service;