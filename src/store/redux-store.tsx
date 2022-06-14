import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";
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

export type AppStateType = ReturnType<RootReducersType>; // ТИП ВСЕГО СТЕЙТА

// SELECTOR TYPE
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

//@ts-ignore
window.store = store;
