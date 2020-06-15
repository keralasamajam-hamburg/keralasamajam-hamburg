import { FormOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Register from '../Register/Register';
import './BecomeAMember.scss';

const BecomeAMember: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const setModalVisibility = (value: boolean) => () => {
    setIsVisible(value);
  };

  return (
    <div className="modal">
      <Button type="primary" onClick={setModalVisibility(true)} icon={<FormOutlined />}>
        Become A Member!
      </Button>
      <Modal title="Registration Form" visible={isVisible} footer={null} onCancel={setModalVisibility(false)}>
        <Register />
      </Modal>
    </div>
  );
};
export default BecomeAMember;
