import { Input } from "antd";
import React, { ChangeEvent, FocusEvent, MouseEvent, useState } from "react";
// import classes from "./EditableSpan.module.css";

type EditableSpanPropsType = {
  statusFromState: string;
  updateProfileStatus: (status: string) => void;
};

export const EditableSpan: React.FC<EditableSpanPropsType> = ({
  statusFromState,
  updateProfileStatus,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  const activateEditMode = (event: MouseEvent<HTMLSpanElement>) => {
    setEditMode(true);
  };

  const disactivateEditMode = (event: FocusEvent<HTMLInputElement>) => {
    setEditMode(false);
    updateProfileStatus(status);
  };

  const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value);
  };

  return editMode ? (
    <Input
      placeholder="set status"
      value={status}
      onBlur={disactivateEditMode}
      onChange={onChangeTitleHandler}
      autoFocus
    />
  ) : (
    <span onDoubleClick={activateEditMode}>
      {statusFromState ? statusFromState : "set status"}
    </span>
  );
};
