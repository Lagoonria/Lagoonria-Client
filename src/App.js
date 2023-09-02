import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/common/Login/Login';
import Register from './pages/common/Register/Register';
import ForgotPassword from './pages/common/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/common/ResetPassword/ResetPassword';
import Home from './pages/common/Home/Home';
import { Sidebar } from './components/common/layout/Sidebar';
import { Navbar } from './components/common/layout/Navbar';

import { Layout, ConfigProvider } from 'antd';
const { Content } = Layout;

const App = () => {

  const user = true;

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Libre Franklin'
        }
      }}
    >
      <div>
        <Router>
          <Switch>
            <Route path='/home'><Home /></Route>
            <Route path='/login'><Login /></Route>
            <Route path='/register'><Register /></Route>
            <Route path='/forgotPassword'><ForgotPassword /></Route>
            <Route path='/resetPassword'><ResetPassword /></Route>

            {user && (
              <Layout className='layout'>

                <Sidebar />

                <Layout>

                  <Navbar />

                  <Content style={{ margin: '5px', padding: 0, minHeight: 280, background: '#fff', textAlign: 'center' }} >

                    <h4>Main content..!</h4>

                  </Content>

                </Layout>

              </Layout>
            )}

          </Switch>
        </Router>
      </div>
    </ConfigProvider>
  );
};

export default App;