import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewPostAC } from "../../store/actions";
import { AppStateType } from "../../store/redux-store";

import { Posts } from "./Posts";

// Контейнерная компонента ==> вся логика и store только здесь.

export const PostsContainer = () => {
  const postsState = useSelector(
    (state: AppStateType) => state.profileReducer.posts
  );
  const dispatch = useDispatch();

  const addNewPostToStoreCallback = (newPost: string) => {
    dispatch(addNewPostAC(newPost));
  };

  return (
    <Posts
      postsState={postsState}
      addNewPostToStore={addNewPostToStoreCallback}
    />
  );
};
