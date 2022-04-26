import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewPostAC } from "../../actions/post-actions";
import { AppStateType } from "../../redux/redux-store";
import { Posts } from "./Posts";

// Контейнерная компонента ==> вся логика и store только здесь.

export const PostsContainer = () => {
  const postsState = useSelector((state: AppStateType) => state.profileReducer);
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

// const mapStateToProps = (state: ProfilePageType) => {
//   return {
//     postsState: state,
//   };
// };

// const mapDispatchToProps = (dispatch: Dispatch<any>) => {
//   return {
//     addNewPostToStore: (newPost: string) => {
//       dispatch(addPostActionCreator(newPost));
//     },
//   };
// };

// export const PostsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Posts);
