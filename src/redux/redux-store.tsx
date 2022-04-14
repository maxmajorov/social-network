import { configureStore } from "@reduxjs/toolkit";
import { dialogsReduser } from "./dialogs-reducer";
import { friendsReduser } from "./friends-reducer";
import { profileReduser } from "./profile-reducer";

// ====== Объединяем reducer вместе======

// ======Создаем Store======
// У Store уже есть методы getState, dispatch

export const store = configureStore({
  reducer: {
    profileReduser: profileReduser,
    dialogsReduser: dialogsReduser,
    friendsReduser: friendsReduser,
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

console.log(store);
