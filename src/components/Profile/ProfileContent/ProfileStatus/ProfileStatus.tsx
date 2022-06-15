import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/redux-store";
import { selectProfileStatus } from "../../../../store/selectors";
import { updateProfileStatusTC } from "../../../../store/thunks";
import { EditableSpan } from "../../../EditableSpan/EditableSpan";

// import classes from "./ProfileInfo.module.css";

export const ProfileStatus: React.FC = () => {
  const profileStatus = useAppSelector(selectProfileStatus);
  const dispatch = useAppDispatch();

  const updateProfileStatusCallback = (status: string) => {
    dispatch(updateProfileStatusTC(status));
  };

  console.log("status render");
  return (
    <EditableSpan
      updateProfileStatus={updateProfileStatusCallback}
      statusFromState={profileStatus}
    />
  );
};
