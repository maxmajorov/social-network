import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router";
import { Preloader } from "../Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import { isLoggedInSelector } from "../../bll/reducers/auth-reducer";
import { appStatusSelect } from "../../bll/reducers/app-reducer";
import { ProfileContent } from "./ProfileContent/ProfileContent";
import classes from "./Profile.module.css";
import {
  getProfileStatusTC,
  getUserProfileTC,
} from "../../bll/reducers/profile-reducer";

export const ProfileContainer = () => {
  const status = useAppSelector(appStatusSelect);
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const dispatch = useAppDispatch();
  const userId = useParams();

  useEffect(() => {
    dispatch(getUserProfileTC(userId));
    dispatch(getProfileStatusTC(userId));
  }, [dispatch, userId]);

  if (!isLoggedIn) {
    return <Navigate to="/authentication" />;
  }

  return (
    <>
      {status === "loading" ? (
        <Preloader />
      ) : (
        <main className={classes.profile}>
          <ProfileContent />
        </main>
      )}
    </>
  );
};
