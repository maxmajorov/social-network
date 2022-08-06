import React from "react";
import {
  profileStatusSelect,
  updateProfileStatusTC,
} from "../../../../bll/reducers/profile-reducer";
import { useAppDispatch, useAppSelector } from "../../../../bll/store";
import { EditableSpan } from "../../../EditableSpan/EditableSpan";

// import classes from "./ProfileInfo.module.css";

export const ProfileStatus: React.FC = () => {
  const profileStatus = useAppSelector(profileStatusSelect);
  const dispatch = useAppDispatch();

  const updateProfileStatusCallback = (status: string) => {
    dispatch(updateProfileStatusTC(status));
  };

  return (
    <EditableSpan
      updateProfileStatus={updateProfileStatusCallback}
      statusFromState={profileStatus}
    />
  );
};
