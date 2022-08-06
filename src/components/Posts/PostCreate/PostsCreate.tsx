import React, { KeyboardEvent } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormControls/FormControls";
import { useAppDispatch } from "../../../bll/store";
import { maxLength100, required } from "../../../utils/validators/validators";
import classes from "./PostsCreate.module.css";
import { addNewPostAC } from "../../../bll/reducers/profile-reducer";

type FormPostType = {
  newPost: string;
};

export const CreatePost: React.FC<InjectedFormProps<FormPostType>> = (
  props
) => {
  const dispatch = useAppDispatch();

  const onKeyPressInputHandler = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    event.charCode === 13
      ? dispatch(addNewPostAC(event.currentTarget.value))
      : console.log("notEnter");
  };

  return (
    <form className={classes.createMessage} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPost"
        className={classes.inputMessage}
        placeholder="Write something here..."
        onKeyPress={onKeyPressInputHandler}
        validate={[required, maxLength100]}
        cols={50}
        rows={2}
      ></Field>
      <button className={classes.postBtn}>add post</button>
    </form>
  );
};

export const CreatePostReduxForm = reduxForm<FormPostType>({
  form: "addPostForm",
})(CreatePost);

export const CreatePostForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (formData: FormPostType) => {
    console.log(formData);
    formData.newPost
      ? dispatch(addNewPostAC(formData.newPost))
      : console.log("Field is empty");
  };

  return (
    <div className={classes.postCreate}>
      <h3 className={classes.postTitle}>Create Posts</h3>
      <CreatePostReduxForm onSubmit={onSubmit} />
    </div>
  );
};
