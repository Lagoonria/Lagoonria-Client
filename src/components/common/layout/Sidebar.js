import React, { useState } from 'react'
import Logo from '../../../assets/images/Logo.png';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, Button } from 'antd';
const { Sider } = Layout;

export const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);

    const common_list = [
        {
            key: '1',
            icon: <UserOutlined />,
            label: 'Rider',
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'Video call',
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'Upload image',
        },
    ]

    return (
        <div>
            <Sider style={{ minHeight: '100vh', backgroundColor: '#fff' }} trigger={null} collapsible collapsed={collapsed} >
                <div style={{ display: "flex", justifyContent: collapsed ? "center" : "space-between", backgroundColor: '#fff', minHeight: '10vh' }}>
                    {!collapsed ? <img style={{ width: 100, height: 25, marginLeft: '10px', marginTop: '20px' }} src={Logo} alt='' /> : ""}
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            color: '#000',
                        }}
                    />
                </div>
                <Menu
                    style={{ minHeight: '90vh' }}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={common_list}
                />
            </Sider>
        </div>
    )
}
