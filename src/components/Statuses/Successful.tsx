import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const Successful: React.FC = () => {
  return (
    <Result
      status="success"
      title="Successfully Registered in Kerala Samajam!"
      subTitle="Welcome to our Family!"
      extra={[
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>,
      ]}
    />
  );
};
export default Successful;
