import { v1 } from "uuid";
import {
  rerenderEntireTree,
  ProfilePageType,
  ActionCreatorType,
} from "./store";

const ADD_NEW_POST = "ADD-NEW-POST";

export const profileReduser = (
  state: ProfilePageType,
  action: ActionCreatorType
) => {
  if (action.type === ADD_NEW_POST) {
    const postItem = {
      _id: v1(),
      text: action.newItem,
      likes: 0,
      comments: 0,
    };
    state.posts = [postItem, ...state.posts]; //не мутируя
    console.log(action);
    rerenderEntireTree();
  }

  return state;
};

export const addPostActionCreator = (newPost: string) => ({
  type: "ADD-NEW-POST",
  newItem: newPost,
});
