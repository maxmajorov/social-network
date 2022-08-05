import React from "react";
import { addNewPostAC } from "../../store/actions";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import { selectPosts } from "../../store/selectors";
import { Posts } from "./Posts";

export const PostsContainer = () => {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  const addNewPostToStoreCallback = (newPost: string) => {
    dispatch(addNewPostAC(newPost));
  };

  return (
    <Posts postsState={posts} addNewPostToStore={addNewPostToStoreCallback} />
  );
};
