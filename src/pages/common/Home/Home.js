import React from 'react'
import '../../../assets/styles/main.css';

import { Layout } from 'antd';
import AppHeader from '../../../components/common/home/AppHeader';
import AppContent from '../../../components/common/home/AppContent';
import AppFooter from '../../../components/common/home/AppFooter';
const { Header, Content } = Layout;

const Home = () => {

  const customStyleHeader = {
    'backgroundColor': 'var(--bg-color)'
  }

  return (
    <Layout className='home-layout'>
      <Header style={customStyleHeader}>
        <AppHeader />
      </Header>
      <Content>
        <AppContent />
      </Content>
        <AppFooter />
    </Layout>
  )
}

export default Home