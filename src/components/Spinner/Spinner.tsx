import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
import ksh from '../../assets/images/ksh.png';
import './Spinner.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

export default function Spinner() {
  return (
    <>
      <Spin indicator={antIcon} />
      <img className="spin-logo" src={ksh} alt="" />
    </>
  );
}
