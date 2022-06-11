import React, { useState } from "react";
import { Button, Modal, Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { loginTC, logoutTC } from "../../store/thunks";

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface AuthFormProps {
  visible?: boolean;
  onCreate?: (values: Values) => void;
  onCancel?: () => void;
  login: string | null;
  authRequest: () => void;
}

export const AuthModal: React.FC<AuthFormProps> = ({
  visible,
  onCreate,
  onCancel,
  login,
  authRequest,
}) => {
  const dispatch = useDispatch();
  const [inputEmailPass, setInputEmailPass] = useState({
    email: "",
    password: "",
    rememberme: false,
  });

  const onFinish = (formData: any) => {
    console.log("Received values of form: ", formData);
    setInputEmailPass(formData);
  };
  const [form] = Form.useForm();

  console.log(inputEmailPass);

  const logINHandler = () => {
    loginTC(
      inputEmailPass.email,
      inputEmailPass.password,
      inputEmailPass.rememberme
    )(dispatch);
  };

  const logOUTHandler = () => {
    logoutTC()(dispatch);
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
          name="email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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
          <Form.Item name="rememberme" valuePropName="checked" noStyle>
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
            sign in
          </Button>
          <Button
            style={{ marginLeft: "5px" }}
            htmlType="submit"
            className="login-form-button"
            onClick={logOUTHandler}
          >
            sign out
          </Button>
          Or <a href="#">register now!</a>
        </Form.Item>
      </Form>
    </Modal>
  );
};
