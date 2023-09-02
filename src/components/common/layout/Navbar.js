import React from 'react'

import { Layout, Avatar } from 'antd';
const { Header } = Layout;

export const Navbar = () => {

  return (
    <div>
        <Header
          style={{
            padding: 0,
            background: '#fff',
            textAlign: 'right',
            paddingRight: '10px'
          }}
        >
          <Avatar size={40}>USER</Avatar>
        </Header>
    </div>
  )
}
