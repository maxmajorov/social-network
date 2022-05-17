import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  dialogsReducer,
  friendsReducer,
  profileReducer,
  usersReducer,
  authReducer,
} from "./reducers";

// ====== Объединяем reducer вместе======

// ======Создаем Store======
// У Store уже есть методы getState, dispatch

const rootReducer = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
  friendsReducer: friendsReducer,
  authReducer: authReducer,
});

type RootReducersType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducersType>; // ТИП ВСЕГО СТЕЙТА

export const store = configureStore({
  reducer: rootReducer,
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

//@ts-ignore
window.store = store;
