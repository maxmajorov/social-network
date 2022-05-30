import React, { ChangeEvent, FocusEvent, MouseEvent, useState } from "react";
// import classes from "./EditableSpan.module.css";

// type EditableSpanPropsType = {
//   text: string;
//   onChange: (changedTask: string) => void;
// };

export const EditableSpan: React.FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("Set status");

  let spanStyle: string = "";

  const activateEditMode = (event: MouseEvent<HTMLSpanElement>) => {
    setEditMode(true);
    // setStatus(text);
  };

  const disactivateEditMode = (event: FocusEvent<HTMLInputElement>) => {
    setEditMode(false);
    // onChange(title);
  };

  const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value);
  };

  return editMode ? (
    <input
      value={status}
      onBlur={disactivateEditMode}
      onChange={onChangeTitleHandler}
      autoFocus
    ></input>
  ) : (
    <span onDoubleClick={activateEditMode} className={spanStyle}>
      {status}
    </span>
  );
};
