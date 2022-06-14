import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Profile from "./Profile";
import { getProfileStatusTC, getUserProfileTC } from "../../store/thunks";
import { Preloader } from "../Preloader/Preloader";
import { useAppSelector } from "../../store/redux-store";
// import classes from "./Profile.module.css";

export const ProfileContainer = () => {
  const { isFetching } = useAppSelector((state) => state.profileReducer);
  const authUserID = useAppSelector((state) => state.authReducer.id);

  const dispatch = useDispatch();
  const userId = useParams();
  let navigate = useNavigate();

  console.log(userId);

  useEffect(() => {
    getUserProfileTC(userId)(dispatch);
    getProfileStatusTC(userId)(dispatch);
  }, [dispatch, userId]);

  return (
    <>
      {isFetching ? (
        <Preloader />
      ) : authUserID ? (
        <Profile />
      ) : (
        navigate(`/authentication`)
      )}
    </>
  );
};
