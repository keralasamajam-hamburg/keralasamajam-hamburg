import React, { useState } from 'react';
import { Form, Input, Button, message, Divider } from 'antd';
import './Contact.scss';
import BecomeAMember from '../../components/BecomeAMember/BecomeAMember';
import Spinner from '../../components/Spinner/Spinner';
import { Helmet } from 'react-helmet-async';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: 'Please enter a valid email ID!',
  },
};

const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (data: any) => {
    setIsSending(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    fetch(process.env.REACT_APP_FUNCTIONS_ENDPOINT + '/sendMessageToKSH', requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        setIsSending(false);
        form.resetFields();
        message.success('Successfully sent message to Kerala Samajam Hamburg');
        return response;
      })
      .catch(() => {
        setIsSending(false);
        message.error('Failed sending message to Kerala Samajam Hamburg');
      });
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact - Kerala Samajam Hamburg</title>
      </Helmet>
      <Divider>
        <h2>Contact Form</h2>
      </Divider>
      <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        {isSending && (
          <div className="spinner-overlay">
            <Spinner />
          </div>
        )}
        <Form.Item
          name={['name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['email']}
          label="Email"
          rules={[
            {
              required: true,
              type: 'email',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['message']}
          label="Message"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item className="submitButton">
          <Button type="primary" htmlType="submit">
            Send message
          </Button>
        </Form.Item>
      </Form>
      <Divider>
        <h2>Click here to become a member!</h2>
      </Divider>
      <BecomeAMember />
    </div>
  );
};
export default Contact;
