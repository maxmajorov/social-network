import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  Store,
} from "redux";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import {
  dialogsReducer,
  friendsReducer,
  profileReducer,
  usersReducer,
  authReducer,
  appReducer,
} from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const rootReducers = combineReducers({
  appReducer: appReducer,
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
  friendsReducer: friendsReducer,
  authReducer: authReducer,
  form: formReducer,
});

type RootReducersType = typeof rootReducers;

export const store: Store<AppStateType> = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type AppStateType = ReturnType<RootReducersType>;

// SELECTOR TYPE
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

// DISPATCH TYPE & DISPATCH
export type useAppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>;
export const useAppDispatch = () => useDispatch<useAppDispatch>();

// THUNK TYPE
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  AnyAction //Потом заменить на свои
>;

//@ts-ignore
window.store = store;
