import { ActionsType, APP_INITIALIZED } from "../actions/app-actions";

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

//loadind => preloader visible
// 'idle' | 'succeeded' | 'failed' => preloader unvisible

const initialState = {
  initialized: false,
  status: "idle" as RequestStatusType,
  error: null as null | string,
};

type InitialStateType = typeof initialState;

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case APP_INITIALIZED:
      return {
        ...state,
        initialized: !state.initialized,
      };

    default:
      return state;
  }
};

// ==== TYPES ====
