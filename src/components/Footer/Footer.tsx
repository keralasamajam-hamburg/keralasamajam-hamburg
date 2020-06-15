import { Divider } from 'antd';
import React from 'react';
import './Footer.scss';
import { FacebookOutlined, MailOutlined } from '@ant-design/icons';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="first-row">
        <a href="mailto:keralasamajam.hamburg@gmail.com">
          <MailOutlined />
        </a>
        <Divider type="vertical" />
        <a href="https://www.facebook.com/groups/382867838394857" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined />
        </a>
      </div>
      <div className={'second-row'}>
        <div className="copy-right">
          <h4>Copyright &copy; 2020 : Kerala Samajam e.V., Hamburg</h4>
        </div>
        <Divider type="vertical" />
        <div className="builder">
          <h4>built by: </h4>
          <a href="https://simi-swaminathan.web.app" target="_blank" rel="noopener noreferrer">
            <h4 className="title">simi.web </h4>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
