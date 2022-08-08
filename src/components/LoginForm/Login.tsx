import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isLoggedInSelector, loginTC } from "../../bll/reducers/auth-reducer";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import { appStatusSelect } from "../../bll/reducers/app-reducer";
import classes from "./Login.module.css";
import { Preloader } from "../Preloader/Preloader";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const Login: React.FC = () => {
  const status = useAppSelector(appStatusSelect);
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    const { email, password, rememberMe } = values;
    dispatch(loginTC(email, password, rememberMe));
  };

  if (isLoggedIn) {
    return <Navigate to="/news" />;
  }

  return (
    <>
      {status === "loading" && <Preloader />}
      <div className={classes.loginContainer}>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className={classes.loginForm}
        >
          <Form.Item
            name="username"
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
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className={classes.loginFormForgot} href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={classes.loginFormButton}
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
