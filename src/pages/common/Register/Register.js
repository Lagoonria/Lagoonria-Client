import React from 'react'
import '../../../assets/styles/main.css';

import { Form, Input, Button, Typography, Checkbox, Col, Row } from 'antd';
const { Title } = Typography;

const Register = () => {

    const customButtonStyle = {
        backgroundColor: 'var(--green_shades_3)',
        color: 'var(--white_1)',
    };

    return (
        <div className='register'>

            <div className='register-section'>

                <div className='register-form-section'>

                    <Title level={2}>Register Here</Title>

                    <p className='register-description-link'>Already have an account?<Button type="link">Log in</Button></p>

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
                                    <Input placeholder="Enter your first name" size='medium' />
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
                                    <Input placeholder="Enter your last name" size='medium' />
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
                            <Input placeholder="Enter your email" size='medium' />
                        </Form.Item>

                        <Form.Item
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your address!',
                                },
                            ]}
                        >
                            <Input placeholder="Enter your address" size='medium' />
                        </Form.Item>

                        <Form.Item
                            name="crestePassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your created password!',
                                },
                            ]}
                        >
                            <Input
                                type="password"
                                placeholder="Create password"
                                size='medium'
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm the password!',
                                },
                            ]}
                        >
                            <Input
                                type="password"
                                placeholder="Confirm password"
                                size='medium'
                            />
                        </Form.Item>

                        <Form.Item
                            name="agree"
                            valuePropName="checked"
                        >
                            <Checkbox className='terms-and-conditions'>I agree with the <Button type='link'>Terms and Conditions</Button></Checkbox>
                        </Form.Item>

                        <Form.Item className='register-button'>
                            <Button style={customButtonStyle} size='medium' block>
                                Register
                            </Button>
                        </Form.Item>

                    </Form>

                </div>

            </div>

            <div className='register-Image'>

            </div>

        </div>
    )
}

export default Register;