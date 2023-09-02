import React from 'react';
import '../../../assets/styles/_variables.css';

import { Col, Row, Typography, Form, Input, Button } from 'antd';
const { Title } = Typography;
const { TextArea } = Input;

const ContactUs = () => {

    const customButtonStyle = {
        backgroundColor: 'var(--green_shades_3)',
        color: 'var(--white_1)',
    };

    return (
        <div id='contactus' className='contact-us-layout'>
            <div className='contact-main-box'>

                <Row gutter={[16, 16]}>

                    <Col span={12} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                        <Title level={4}>Contact Us</Title>
                        <p>Need to get in touch with us? Either fill out the form with your inquiry or find the website mail you'd like to contact below.</p>
                    </Col>

                    <Col span={12} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                        <Form
                            initialValues={{
                                remember: true,
                            }}
                        >

                            <Row gutter={[8, 8]}>
                                <Col md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                                    <Form.Item
                                        name="firstName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your first name!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="First name" size='large' />
                                    </Form.Item>
                                </Col>
                                <Col md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                                    <Form.Item
                                        name="lastName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your last name!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Last name" size='large' />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Enter your email" size='large' />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your meaasge!',
                                    },
                                ]}
                            >
                                <TextArea rows={10} placeholder="What do you want to know.." maxLength={6} />
                            </Form.Item>

                            <Form.Item className='contact-form-button'>
                                <Button style={customButtonStyle} size='medium'>
                                    Submit
                                </Button>
                            </Form.Item>

                        </Form>
                    </Col>

                </Row>

            </div>
        </div>
    )
}

export default ContactUs;