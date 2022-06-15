import React from "react";
import { Button } from "antd";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import classes from "./LoginForm.module.css";
import {
  CheckboxForm,
  InputForm,
} from "../../common/FormControls/FormControls";
import { minLength2, required } from "../../utils/validators/validators";
import { loginTC } from "../../store/thunks";
import { useAppDispatch, useAppSelector } from "../../store/redux-store";
import { useNavigate } from "react-router";
import {
  selectMyProfileID,
  selectResponseMessage,
} from "../../store/selectors";

type FormDataType = {
  email: string;
  password: string;
  rememderme: boolean;
};

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  const responseMessage = useAppSelector(selectResponseMessage);

  return (
    <div className={classes.loginContainer}>
      <form onSubmit={props.handleSubmit} className={classes.loginForm}>
        <h2 style={{ textAlign: "center" }}>
          Sign in to social
          <b>
            <span style={{ color: "#228be6" }}>GO</span>
          </b>
        </h2>
        <Field
          placeholder={"email"}
          label={"Email"}
          name={"email"}
          component={InputForm}
          validate={[required, minLength2]}
        />
        <Field
          placeholder={"password"}
          label={"Password"}
          name={"password"}
          type={"password"}
          component={InputForm}
          validate={[required, minLength2]}
        />
        {responseMessage ? (
          <div style={{ color: "red" }}>{responseMessage}</div>
        ) : null}
        <Field type={"checkbox"} name={"rememderme"} component={CheckboxForm} />

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
  const authUserID = useAppSelector(selectMyProfileID);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
    const { email, password, rememderme } = formData;
    loginTC(email, password, rememderme)(dispatch);
  };

  return authUserID ? (
    <> {navigate(`/profile/${authUserID}`)}</>
  ) : (
    <LoginReduxForm onSubmit={onSubmit} />
  );
};
