import { Input } from "antd";
import React, { ChangeEvent, FocusEvent, MouseEvent, useState } from "react";
// import classes from "./EditableSpan.module.css";

type EditableSpanPropsType = {
  data: string;
  updateData: (data: string) => void;
};

export const EditableSpan: React.FC<EditableSpanPropsType> = ({
  data,
  updateData,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  const activateEditMode = (event: MouseEvent<HTMLSpanElement>) => {
    setEditMode(true);
  };

  const disactivateEditMode = (event: FocusEvent<HTMLInputElement>) => {
    setEditMode(false);
    updateData(status);
  };

  const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value);
  };

  return editMode ? (
    <Input
      placeholder="set value"
      value={status}
      onBlur={disactivateEditMode}
      onChange={onChangeTitleHandler}
      autoFocus
      style={{ width: "50%" }}
    />
  ) : (
    <span onDoubleClick={activateEditMode}>{data ? data : "none"}</span>
  );
};
