import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { StoreContext } from "../../../StoreContext";
import { Posts } from "./Posts";

// Контейнерная компонента ==> вся логика и store только здесь.

export const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(state) => {
        const postsState = state.getState().profileReduser;

        const addNewPostToStoreCallback = (newPost: string) => {
          state.dispatch(addPostActionCreator(newPost));
        };

        return (
          <Posts
            postsState={postsState}
            addNewPostToStore={addNewPostToStoreCallback}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
