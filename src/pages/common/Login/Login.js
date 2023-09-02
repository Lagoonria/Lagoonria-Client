import React from 'react'
import '../../../assets/styles/main.css';

import { Form, Input, Button, Typography } from 'antd';
const { Title } = Typography;

function Login() {

    const customButtonStyle = {
        backgroundColor: 'var(--green_shades_3)',
        color: 'var(--white_1)',
    };

    return (
        <div className='login'>
            <div className='login-Image'>
            </div>
            <div className='login-section'>

                <div className='input-section'>

                    <div className='login-form-section'>

                        <div className='form-heading'>
                            <Title level={2}>Login</Title>
                        </div>

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                        >

                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Enter your email" size='medium' />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    size='medium'
                                />
                            </Form.Item>

                            <Form.Item className='forgot-pwd-link-section'>
                                <Button type='link'>Forgot Password?</Button>
                            </Form.Item>

                            <Form.Item className='login-button'>
                                <Button style={customButtonStyle} size='medium' block>
                                    Login
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>

                </div>

                <div className='link-section'>
                    <p className='link-description'>Not Registered Yet?<Button type="link">Create an account</Button></p>
                </div>

            </div>
        </div>
    );
}

export default Login;