import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';
import ErrorRegistering from '../Statuses/ErrorRegistering';
import Successful from '../Statuses/Successful';
import './Register.scss';
import Spinner from '../Spinner/Spinner';

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setSetShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onRegisterSubmit = (memberData: any) => {
    setIsLoading(true);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(memberData),
    };
    fetch(process.env.REACT_APP_FUNCTIONS_ENDPOINT + '/registerUser', requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response;
      })
      .then(() => {
        form.resetFields();
        setIsLoading(false);
        setSetShowSuccess(true);
      })
      .catch((error) => {
        if (error.json) {
          error.json().then((errorJSON: any) => {
            setError(errorJSON.error);
            setIsLoading(false);
          });
        } else {
          setError('Oops something went wrong. Try again later!');
          setIsLoading(false);
        }
        form.resetFields();
      });
  };

  return (
    <>
      {isLoading && (
        <div className="spinner-overlay">
          <Spinner />
        </div>
      )}
      <div className="register">
        {showSuccess ? (
          <Successful />
        ) : error ? (
          <ErrorRegistering message={error} />
        ) : (
          <Form
            form={form}
            name="validate_other"
            {...formItemLayout}
            onFinish={onRegisterSubmit}
            initialValues={{
              'input-number': 3,
              'checkbox-group': ['A', 'B', 'C'],
              rate: 3.5,
            }}>
            <Form.Item
              name="name"
              label={<span>Name &nbsp;</span>}
              rules={[{ required: true, message: 'Please enter your Name!', whitespace: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Address!',
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please enter your E-mail!',
                },
              ]}
              hasFeedback>
              <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select your gender!' }]}>
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="maritalStatus"
              label="Marital Status"
              rules={[{ required: true, message: 'Please select your marital status!' }]}>
              <Radio.Group>
                <Radio value="single">Single</Radio>
                <Radio value="married">Married</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="residentialStatus"
              label="Residential Status"
              rules={[{ required: true, message: 'Please select the type of your visa!' }]}>
              <Radio.Group>
                <Radio value="limitedVisa">Limited visa</Radio>
                <Radio value="unlimitedVisa">Unlimited visa</Radio>
                <Radio value="studentVisa">Student visa</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item className="submit">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </>
  );
};
export default Register;
