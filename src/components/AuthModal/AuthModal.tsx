import React, { ChangeEvent, useState } from "react";
import { Button, Modal, Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface AuthFormProps {
  visible?: boolean;
  onCreate?: (values: Values) => void;
  onCancel?: () => void;
  login: string;
  authRequest: () => void;
}

export const AuthModal: React.FC<AuthFormProps> = ({
  visible,
  onCreate,
  onCancel,
  login,
  authRequest,
}) => {
  const [inputLogin, setInputLogin] = useState<string>("");

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const [form] = Form.useForm();

  const inputLoginHander = (event: ChangeEvent<HTMLInputElement>) => {
    setInputLogin(event.currentTarget.value);
  };

  const logINHandler = () => {
    authRequest();
    // inputLogin === login
    //   ? alert(`Hello, ${login}`)
    //   : alert("User is not found");
  };

  return (
    <Modal
      visible={visible}
      title="SignIN"
      okText="SIGN IN"
      cancelText="LOG OUT"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate && onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            onChange={inputLoginHander}
            value={login}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="#">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={logINHandler}
          >
            Sign in
          </Button>
          Or <a href="#">register now!</a>
        </Form.Item>
      </Form>
    </Modal>
  );
};
