import {
  InitialStateType,
  PostObj,
  profileReducer,
} from "../reducers/profile-reducer";

let testState: InitialStateType;

beforeEach(() => {
  testState = {
    isFetching: true,
    profile: {
      userId: 0,
      lookingForAJob: true,
      lookingForAJobDescription: "",
      fullName: "",
      contacts: {
        github: "",
        vk: "none",
        facebook: "none",
        instagram: "none",
        twitter: "none",
        website: "none",
        youtube: "none",
        mainLink: "",
      },
      photos: {
        small: "./img/avatar.jpg",
        large: "./img/avatar.jpg",
      },
    },
    profileStatus: "",
    posts: [
      { _id: "1", text: "Hello everybody!", likes: 4, comments: 2 },
      { _id: "2", text: "I'm start learning React", likes: 14, comments: 4 },
    ] as Array<PostObj>,
    newPostText: "Write something here...",
  };
});

test("new post should be add successfully", () => {
  let newState = profileReducer(testState, {
    type: "PROFILE/add-new-post",
    newPost: "New post",
  });

  expect(newState.posts.length).toBe(3);
  expect(newState.posts[0].text).toBe("New post");
});

test("user profile should be fetch", () => {
  const userProfile = {
    userId: 123456,
    lookingForAJob: true,
    lookingForAJobDescription: "yes",
    fullName: "Max",
    contacts: {
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
    },
    photos: {
      small: "",
      large: "",
    },
  };

  let newState = profileReducer(testState, {
    type: "PROFILE/get-user-profile",
    profile: userProfile,
  });

  expect(newState.profile.userId).toBe(123456);
  expect(newState.profile.fullName).toBe("Max");
});

test("user profile status should be download", () => {
  let newState = profileReducer(testState, {
    type: "PROFILE/get-user-profile-status",
    userId: 12346,
    status: "Hello!",
  });

  expect(newState.profileStatus).toBe("Hello!");
});

test("user profile status should be setted", () => {
  const status = "Hello, developers!";

  let newState = profileReducer(testState, {
    type: "PROFILE/set-user-profile-status",
    status: status,
  });

  expect(newState.profileStatus).toBe("Hello, developers!");
});
