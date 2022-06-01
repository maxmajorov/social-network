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

// Форма с использованием ANTD
// Не смог совместить с redux form

// export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
//   const onFinish = (values: any) => {
//     console.log("Received values of form: ", values);
//   };

//   return (
//     <div className={classes.loginContainer}>
//       <Form
//         name="normal_login"
//         className={classes.loginForm}
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//       >
//         <h2 style={{ textAlign: "center" }}>
//           Sign in to social
//           <b>
//             <span style={{ color: "#228be6" }}>GO</span>
//           </b>
//         </h2>
//         <Form.Item
//           name="username"
//           rules={[{ required: true, message: "Please input your Username!" }]}
//         >
//           <Input
//             prefix={<UserOutlined className="site-form-item-icon" />}
//             placeholder="Username"
//           />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[{ required: true, message: "Please input your Password!" }]}
//         >
//           <Input
//             prefix={<LockOutlined className="site-form-item-icon" />}
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Item>
//         <Form.Item>
//           <Form.Item name="remember" valuePropName="checked" noStyle>
//             <Checkbox>Remember me</Checkbox>
//           </Form.Item>

//           <a className={classes.loginFormForgot} href="">
//             Forgot password
//           </a>
//         </Form.Item>
//         <Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             className={classes.loginFormButton}
//           >
//             Sign in
//           </Button>
//           Or <a href="">register now!</a>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

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
