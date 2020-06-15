import { Result } from 'antd';
import React from 'react';

const ErrorRegistering: React.FC<{ message: string | null }> = ({ message }) => {
  return <Result status="error" title={message || 'Failed to register, please try again later!'} />;
};
export default ErrorRegistering;
