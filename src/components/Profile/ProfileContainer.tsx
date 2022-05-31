import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Profile from "./Profile";
import { getProfileStatusTC, getUserProfileTC } from "../../store/thunks";
// import classes from "./Profile.module.css";

export const ProfileContainer = () => {
  const dispatch = useDispatch();
  const userId = useParams();

  console.log(userId);

  useEffect(() => {
    getUserProfileTC(userId)(dispatch);
    getProfileStatusTC(userId)(dispatch);
  }, [dispatch, userId]);

  return <Profile />;
};
