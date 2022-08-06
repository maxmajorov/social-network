import { InitialStateType, usersReducer } from "../reducers/users-reducer";

let testState: InitialStateType;

beforeEach(() => {
  testState = {
    users: [
      {
        id: 123,
        followed: false,
        name: "Max",
        photos: {
          large: "",
          small: "",
        },
        uniqueUrlName: "",
        status: "Free",
      },
    ],
    currentPage: 1,
    totalCount: 0,
    pageSize: 0,
    followProgress: [],
  };
});

test("user should be successfully followed", () => {
  let newState = usersReducer(testState, {
    type: "USERS/follow-user",
    userID: "123",
  });

  expect(newState.users[0].id.toString()).toBe("123");
  expect(newState.users[0].followed).toBe(true);
});

test("user should be successfully unfollowed", () => {
  let newState = usersReducer(testState, {
    type: "USERS/unfollow-user",
    userID: "123",
  });

  expect(newState.users[0].id.toString()).toBe("123");
  expect(newState.users[0].followed).toBe(false);
});
