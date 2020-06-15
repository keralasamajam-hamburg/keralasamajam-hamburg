import { UpOutlined } from '@ant-design/icons';
import { BackTop } from 'antd';
import React from 'react';
import './App.less';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './pages/Content/Content';

const App: React.FC = () => {
  return (
    <div className={'mainPage'}>
      <Header />
      <Navbar />
      <Content />
      <Footer />
      <BackTop>
        <UpOutlined />
      </BackTop>
    </div>
  );
};
export default App;
