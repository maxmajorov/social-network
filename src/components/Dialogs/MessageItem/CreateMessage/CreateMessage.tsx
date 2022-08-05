import React, { KeyboardEvent } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { AddNewMessageAC } from "../../../../bll/reducers/dialogs-reducer";
import { useAppDispatch } from "../../../../bll/store";
import { Textarea } from "../../../../common/FormControls/FormControls";
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
  const dispatch = useAppDispatch();

  const onKeyPressInputHandler = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    console.log(event.currentTarget.value);
    event.charCode === 13
      ? dispatch(AddNewMessageAC(event.currentTarget.value))
      : console.log("notEnter");
  };

  return (
    <form className={classes.createMessage} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessage"
        className={classes.inputMessage}
        placeholder="Write something here..."
        onKeyPress={onKeyPressInputHandler}
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
  const dispatch = useAppDispatch();

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
