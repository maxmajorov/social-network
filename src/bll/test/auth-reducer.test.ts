import { authReducer } from "./../reducers/auth-reducer";
import { InitialStateType } from "../reducers/auth-reducer";

let testState: InitialStateType;

beforeEach(() => {
  testState = {
    isLoggedIn: false,
    userID: null as number | null,
    responseMessage: "",
    captcha: null as string | null,
  };
});

test("login should be successfully", () => {
  let newState = authReducer(testState, {
    type: "AUTH/login",
    value: true,
  });

  expect(newState.isLoggedIn).toBe(true);
  expect(newState).not.toEqual(testState);
});

test("should be set userID", () => {
  let newState = authReducer(testState, {
    type: "AUTH/set-userID",
    userID: 12345,
  });

  expect(newState).not.toEqual(testState);
  expect(newState.userID).toBe(12345);
});
