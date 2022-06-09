import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { AddNewMessageAC } from "../../../../store/actions";

import classes from "./CreateMessage.module.css";

type FormMessageType = {
  newMessage: string;
};

export const CreateMessage: React.FC<InjectedFormProps<FormMessageType>> = (
  props
) => {
  console.log(props.error);
  return (
    <form className={classes.createMessage} onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newMessage"
        className={classes.inputMessage}
        placeholder="Write something here..."
        // onKeyPress={onKeyPressInputHandler}
        cols={50}
        rows={2}
      ></Field>
      <button className={classes.postBtn}>Send message</button>
    </form>
  );
};

export const CreateMessageReduxForm = reduxForm<FormMessageType>({
  form: "addMessageForm",
})(CreateMessage);

export const CreateMessageForm: React.FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  // const onKeyPressInputHandler = (
  //   event: KeyboardEvent<HTMLTextAreaElement>
  // ) => {
  //   event.charCode === 13
  //     ? onClickAddNewMessageHandler()
  //     : console.log("notEnter");
  // };

  const onSubmit = (formData: FormMessageType) => {
    if (formData.newMessage) {
      setError("");
      dispatch(AddNewMessageAC(formData.newMessage));
    } else {
      setError("Invalid input");
    }
  };
  return (
    <>
      <CreateMessageReduxForm onSubmit={onSubmit} />
      <div className={classes.errorMessage}>{error}</div>
    </>
  );
};
