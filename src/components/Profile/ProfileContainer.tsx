import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Profile from "./Profile";
import { getProfileStatusTC, getUserProfileTC } from "../../store/thunks";
import { Preloader } from "../Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import { selectIsProfileFetching } from "../../store/selectors";
import { userIDSelector } from "../../bll/reducers/auth-reducer";
// import classes from "./Profile.module.css";

export const ProfileContainer = () => {
  const isFetching = useAppSelector(selectIsProfileFetching);
  const authUserID = useAppSelector(userIDSelector);
  const dispatch = useAppDispatch();
  const userId = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserProfileTC(userId));
    dispatch(getProfileStatusTC(userId));
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
