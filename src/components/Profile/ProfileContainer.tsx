import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Profile from "./Profile";
import { getProfileStatusTC, getUserProfileTC } from "../../store/thunks";
import { Preloader } from "../Preloader/Preloader";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/redux-store";
// import classes from "./Profile.module.css";

export const ProfileContainer = () => {
  const { isFetching } = useSelector(
    (state: AppStateType) => state.profileReducer
  );
  const dispatch = useDispatch();
  const userId = useParams();

  console.log(userId);

  useEffect(() => {
    getUserProfileTC(userId)(dispatch);
    getProfileStatusTC(userId)(dispatch);
  }, [dispatch, userId]);

  return <>{isFetching ? <Preloader /> : <Profile />}</>;
};
