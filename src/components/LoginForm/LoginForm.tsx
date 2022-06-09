import React from "react";
import { Button } from "antd";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
// import { Form, Input, Button, Checkbox } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
import classes from "./LoginForm.module.css";

type FormDataType = {
  username: string;
  password: string;
  rememderme: boolean;
};

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <div className={classes.loginContainer}>
      <form onSubmit={props.handleSubmit} className={classes.loginForm}>
        <h2 style={{ textAlign: "center" }}>
          Sign in to social
          <b>
            <span style={{ color: "#228be6" }}>GO</span>
          </b>
        </h2>
        <Field placeholder={"username"} name={"username"} component={"input"} />
        <Field placeholder={"password"} name={"password"} component={"input"} />
        <Field type={"checkbox"} name={"rememderme"} component={"input"} />

        <Button
          type="primary"
          htmlType="submit"
          className={classes.loginFormButton}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm);

export const Login: React.FC = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
  };
  return <LoginReduxForm onSubmit={onSubmit} />;
};
