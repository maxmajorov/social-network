export const ADD_NEW_POST = "ADD-NEW-POST";

export type PostsActionsType = AddNewPostACType;

type AddNewPostACType = {
  type: typeof ADD_NEW_POST;
  newPost: string;
};

export const addNewPostAC = (newPost: string): AddNewPostACType => ({
  type: ADD_NEW_POST,
  newPost: newPost,
});
