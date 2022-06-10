import React from "react";
import TextArea from "antd/lib/input/TextArea";
import { Input, Form, Checkbox } from "antd";
import classes from "./FormControls.module.css";

// ==== FOR TEXTAREA ====
export const Textarea: React.FC<any> = ({ input, meta, name, ...props }) => {
  const finalStyle = meta.error
    ? `${classes.textarea} ${classes.error}`
    : classes.textarea;

  console.log(meta.warning);
  return (
    <div>
      <TextArea
        showCount
        maxLength={100}
        {...input}
        {...props}
        className={finalStyle}
      />
      {meta.touched &&
        ((meta.error && (
          <span className={classes.errorSpan}>{meta.error}</span>
        )) ||
          (meta.warning && <span>{meta.warning}</span>))}
    </div>
  );
};

// ==== FOR INPUT ====
export const InputForm: React.FC<any> = ({
  input,
  label,
  meta,
  name,
  ...props
}) => {
  const finalStyle = meta.error
    ? `${classes.textarea} ${classes.error}`
    : classes.textarea;

  console.log(meta.warning);
  return (
    <div>
      <Form.Item label={label} name={name}>
        <Input {...input} {...props} className={finalStyle} />
      </Form.Item>

      {meta.touched &&
        ((meta.error && (
          <span className={classes.errorSpan}>{meta.error}</span>
        )) ||
          (meta.warning && <span>{meta.warning}</span>))}
    </div>
  );
};

// ==== FOR CHECKBOX ====
export const CheckboxForm: React.FC<any> = ({ input, name, ...props }) => {
  return (
    <Form.Item
      name={name}
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox {...input} {...props}>
        Remember me
      </Checkbox>
    </Form.Item>
  );
};
