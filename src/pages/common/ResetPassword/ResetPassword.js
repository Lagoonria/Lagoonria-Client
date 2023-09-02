import React, { useState } from 'react'
import '../../../assets/styles/main.css';

import { Form, Input, Button, Typography } from 'antd';
const { Title } = Typography;

const ResetPassword = () => {

    const [Verify, setVerify] = useState(false);

    const customButtonStyle = {
        backgroundColor: 'var(--green_shades_3)',
        color: 'var(--white_1)',
    };

    return (
        <div className='resetPassword'>

            <div className='resetPassword-box'>

                <Title level={2}>Reset Password</Title>

                <p className='otp-description'>OTP send to the email enter the OTP below.</p>

                <Form
                    initialValues={{
                        remember: true,
                    }}
                >

                    <Form.Item
                        name="otp"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the otp!',
                            },
                        ]}
                    >
                        <Input placeholder="OTP" size='medium' />
                    </Form.Item>

                    <Form.Item className='otp-button'>
                        <Button style={customButtonStyle} size='medium' block onClick={() => { setVerify(!Verify); }}>
                            Verify
                        </Button>
                    </Form.Item>

                </Form>

                {Verify ?
                    <div>
                        <p className='reset-description'>Enter your new password</p>

                        <Form
                            initialValues={{
                                remember: true,
                            }}
                        >

                            <Form.Item
                                name="newPassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the new password!',
                                    },
                                ]}
                            >
                                <Input type='password' placeholder="New password" size='medium' />
                            </Form.Item>

                            <Form.Item
                                name="confirmNewPassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm new password!',
                                    },
                                ]}
                            >
                                <Input type='password' placeholder="Confirm new password" size='medium' />
                            </Form.Item>

                            <Form.Item className='reset-button'>
                                <Button style={customButtonStyle} size='medium' block>
                                    Submit
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>
                    :
                    ""
                }

                <div className='back-to-login'>
                    <Button type='link'>Back to login</Button>
                </div>

            </div>

        </div>
    )
}

export default ResetPassword