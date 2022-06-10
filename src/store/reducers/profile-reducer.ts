import { v1 } from "uuid";
import {
  ADD_NEW_POST,
  PostsActionsType,
  GET_USER_PROFILE,
  PUT_USER_PROFILE_STATUS,
  GET_USER_PROFILE_STATUS,
  IS_FETCHING_PROFILE,
} from "../actions/profile-actions";
import { ProfileResponseType } from "../../api/api";

export type PostObj = {
  _id: string;
  text: string;
  likes: number;
  comments: number;
};

export type ProfilePageType = {
  profile: ProfileResponseType | null;
  posts: Array<PostObj>;
  newPostText: string;
};

export type InitialStateType = typeof initialState;

const initialState = {
  isFetching: true,
  profile: {
    userId: 0,
    lookingForAJob: true,
    lookingForAJobDescription: "looking for new opportunities",
    fullName: "Maxim Predko",
    contacts: {
      github: "https://github.com/maxmajorov",
      vk: "none",
      facebook: "none",
      instagram: "none",
      twitter: "none",
      website: "none",
      youtube: "none",
      mainLink: "maxpredko@gmail.com",
    },
    photos: {
      small: "./img/avatar.jpg",
      large: "./img/avatar.jpg",
    },
  },
  profileStatus: "",
  posts: [
    { _id: v1(), text: "Hello everybody!", likes: 4, comments: 2 },
    { _id: v1(), text: "I'm start learning React", likes: 14, comments: 4 },
    { _id: v1(), text: "Redux & TypeScript...", likes: 8, comments: 10 },
  ] as Array<PostObj>,
  newPostText: "Write something here...",
};

export const profileReducer = (
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

    case IS_FETCHING_PROFILE: {
      return { ...state, isFetching: action.fetch };
    }

    case GET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case GET_USER_PROFILE_STATUS: {
      return {
        ...state,
        profileStatus:
          state.profile.userId === action.userId
            ? action.status
            : action.status,
      };
    }

    case PUT_USER_PROFILE_STATUS: {
      return { ...state, profileStatus: action.status };
    }

    default: {
      return state;
    }
  }
};
