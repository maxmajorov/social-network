import { v1 } from "uuid";
import { ADD_NEW_POST, PostsActionsType } from "../actions/post-actions";

export type PostObj = {
  _id: string;
  text: string;
  likes: number;
  comments: number;
};

export type ProfilePageType = {
  posts: Array<PostObj>;
  newPostText: string;
};

export type InitialStateType = typeof initialState;

const initialState = {
  posts: [
    { _id: v1(), text: "Hello everybody!", likes: 4, comments: 2 },
    { _id: v1(), text: "I'm start learning React", likes: 14, comments: 4 },
    { _id: v1(), text: "Redux & TypeScript...", likes: 8, comments: 10 },
    { _id: v1(), text: "BLL => Redux", likes: 18, comments: 1 },
  ] as Array<PostObj>,
  newPostText: "Write something here...",
};

export const profileReduser = (
  state: InitialStateType = initialState,
  action: PostsActionsType
): InitialStateType => {
  switch (action.type) {
    case ADD_NEW_POST: {
      const postItem = {
        _id: v1(),
        text: action.newPost,
        likes: 0,
        comments: 0,
      };
      return { ...state, posts: [postItem, ...state.posts] };
    }
    default: {
      return state;
    }
  }
};
