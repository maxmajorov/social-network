import React from "react";
import { useDispatch } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea } from "../../../../common/FormControls/FormControls";
import { AddNewMessageAC } from "../../../../store/actions";
import {
  maxLength100,
  required,
} from "../../../../utils/validators/validators";
import classes from "./CreateMessage.module.css";

type FormMessageType = {
  newMessage: string;
};

export const CreateMessage: React.FC<InjectedFormProps<FormMessageType>> = (
  props
) => {
  return (
    <form className={classes.createMessage} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessage"
        className={classes.inputMessage}
        placeholder="Write something here..."
        // onKeyPress={onKeyPressInputHandler}
        validate={[required, maxLength100]}
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

  // const onKeyPressInputHandler = (
  //   event: KeyboardEvent<HTMLTextAreaElement>
  // ) => {
  //   event.charCode === 13
  //     ? onClickAddNewMessageHandler()
  //     : console.log("notEnter");
  // };

  const onSubmit = (formData: FormMessageType) => {
    formData.newMessage
      ? dispatch(AddNewMessageAC(formData.newMessage))
      : console.log("Field is empty");
  };
  return (
    <>
      <CreateMessageReduxForm onSubmit={onSubmit} />
    </>
  );
};
