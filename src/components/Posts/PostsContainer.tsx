import React from "react";
import { addNewPostAC, postsSelect } from "../../bll/reducers/profile-reducer";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import { Posts } from "./Posts";

export const PostsContainer = () => {
  const posts = useAppSelector(postsSelect);
  const dispatch = useAppDispatch();

  const addNewPostToStoreCallback = (newPost: string) => {
    dispatch(addNewPostAC(newPost));
  };

  return (
    <Posts postsState={posts} addNewPostToStore={addNewPostToStoreCallback} />
  );
};
