import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import {
  dialogsReducer,
  friendsReducer,
  profileReducer,
  usersReducer,
  authReducer,
} from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducers = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
  friendsReducer: friendsReducer,
  authReducer: authReducer,
});

type RootReducersType = typeof rootReducers;

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store: Store<AppStateType> = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
  // applyMiddleware(thunkMiddleware)
);

export type AppStateType = ReturnType<RootReducersType>; // ТИП ВСЕГО СТЕЙТА

//@ts-ignore
window.store = store;
