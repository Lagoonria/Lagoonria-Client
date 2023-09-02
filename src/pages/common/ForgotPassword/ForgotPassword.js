import React from 'react'
import '../../../assets/styles/main.css';

import { Form, Input, Button, Typography } from 'antd';
const { Title } = Typography;

const ForgotPassword = () => {

    const customButtonStyle = {
        backgroundColor: 'var(--green_shades_3)',
        color: 'var(--white_1)',
    };

    return (
        <div className='forgotPassword'>

            <div className='forgotPassword-box'>

                <Title level={2}>Forgot your password?</Title>

                <p className='forgotPassword-description'>Don’t worry ! Resetting your password is easy. just type in the email to send the OTP.</p>

                <Form
                    initialValues={{
                        remember: true,
                    }}
                >

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

                    <Form.Item className='forgotPassword-button'>
                        <Button style={customButtonStyle} size='medium' block>
                            Submit
                        </Button>
                    </Form.Item>

                </Form>

                <div className='remember-password'>
                    <Button type='link'>Remember Password?</Button>
                </div>

            </div>

        </div>
    )
}

export default ForgotPassword