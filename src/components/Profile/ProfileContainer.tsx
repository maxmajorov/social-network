import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Profile from "./Profile";
import { getUserProfileTC } from "../../store/thunks";
// import classes from "./Profile.module.css";

export const ProfileContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    getUserProfileTC(params)(dispatch);
  });

  return <Profile />;
};
