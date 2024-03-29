import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  Store,
} from "redux";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppActionsTypes, appReducer } from "../bll/reducers/app-reducer";
import {
  DialogsActionsTypes,
  dialogsReducer,
} from "./reducers/dialogs-reducer";
import { AuthActionsType, authReducer } from "./reducers/auth-reducer";
import { ProfileActionsType, profileReducer } from "./reducers/profile-reducer";
import { usersReducer } from "./reducers/users-reducer";
import { friendsReducer } from "./reducers/friends-reducer";

const rootReducers = combineReducers({
  appReducer: appReducer,
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
  friendsReducer: friendsReducer,
  authReducer: authReducer,
  form: formReducer,
});

export const store: Store<AppRootStateType> = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type AppRootStateType = ReturnType<typeof rootReducers>;
export type AppRootActionsType =
  | AppActionsTypes
  | DialogsActionsTypes
  | AuthActionsType
  | ProfileActionsType;

// SELECTOR TYPE

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;

// DISPATCH TYPE & DISPATCH

export type useAppDispatchType = ThunkDispatch<
  AppRootStateType,
  unknown,
  AnyAction // change
>;
export const useAppDispatch = () => useDispatch<useAppDispatchType>();

// ==== THUNKS TYPES ====

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AnyAction //Потом заменить на свои
>;

//@ts-ignore
window.store = store;
