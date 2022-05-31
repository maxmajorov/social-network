import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppStateType } from "../../../../store/redux-store";
import { updateProfileStatusTC } from "../../../../store/thunks";
import { EditableSpan } from "../../../EditableSpan/EditableSpan";

import classes from "./ProfileInfo.module.css";

export const ProfileStatus: React.FC = () => {
  const statusSelector = useSelector(
    (state: AppStateType) => state.profileReducer.profileStatus
  );
  const dispatch = useDispatch();

  const updateProfileStatusCallback = (status: string) => {
    updateProfileStatusTC(status)(dispatch);
  };

  console.log("status render");
  return (
    <EditableSpan
      updateProfileStatus={updateProfileStatusCallback}
      statusFromState={statusSelector}
    />
  );
};
