import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { showUserProfileAC } from "../../actions/profile-actions";
import { instance, ProfileResponseType } from "../../api/api";

import Profile from "./Profile";
// import classes from "./Profile.module.css";

export const ProfileContainer = () => {
  const dispatch = useDispatch();

  const params = useParams();
  console.log(params);

  useEffect(() => {
    instance
      .get<ProfileResponseType>(`profile/${params.userId}`)
      .then((response) => {
        console.log("get prof");
        dispatch(showUserProfileAC(response.data));
      });
  });

  return <Profile />;
};
