import { v1 } from "uuid";
import { rerenderEntireTree, ProfilePageType } from "./store";

const ADD_NEW_POST = "ADD-NEW-POST";

const initialState = {
  posts: [
    { _id: v1(), text: "Hello everybody!", likes: 4, comments: 2 },
    { _id: v1(), text: "I'm start learning React", likes: 14, comments: 4 },
    { _id: v1(), text: "Redux & TypeScript...", likes: 8, comments: 10 },
    { _id: v1(), text: "BLL => Redux", likes: 18, comments: 1 },
  ],
  newPostText: "Write something here...",
};

export const profileReduser = (
  state: ProfilePageType = initialState,
  action: any
) => {
  if (action.type === ADD_NEW_POST) {
    const postItem = {
      _id: v1(),
      text: action.newItem,
      likes: 0,
      comments: 0,
    };
    state.posts = [postItem, ...state.posts]; //не мутируя
    rerenderEntireTree();
  }

  return state;
};

export const addPostActionCreator = (newPost: string) => ({
  type: "ADD-NEW-POST",
  newItem: newPost,
});
