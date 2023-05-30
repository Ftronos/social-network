import { ThunkAction } from "redux-thunk";
import { getAuthUserData_tc } from "redux/auth_reducer";
import { InferActionsTypes } from "redux/redux-store";
import { AppState_type } from "./redux-store";

type initialState_type = {
  initialized: boolean;
  globalErrors: Array<string>;
};

const initialState: initialState_type = {
  initialized: false,
  globalErrors: [],
};

const appReducer = (
  state = initialState,
  action: Actions_types
): initialState_type => {
  switch (action.type) {
    case "INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized: true,
      };

    case "ADD_GLOBAL_ERROR": {
      return {
        ...state,
        globalErrors: [...state.globalErrors, action.errorText],
      };
    }

    case "REMOVE_GLOBAL_ERROR": {
      return {
        ...state,
        globalErrors: state.globalErrors.slice(1),
      };
    }

    default:
      return state;
  }
};

type Actions_types = InferActionsTypes<typeof appActions>;

type thunk_type = ThunkAction<
  Promise<void>,
  AppState_type,
  unknown,
  Actions_types
>;

export const appActions = {
  initializedSuccess_ac: () =>
    ({
      type: "INITIALIZED_SUCCESS",
    } as const),

  addGlobalError_ac: (errorText: string) =>
    ({
      type: "ADD_GLOBAL_ERROR",
      errorText,
    } as const),

  removeGlobalError_ac: () =>
    ({
      type: "REMOVE_GLOBAL_ERROR",
    } as const),
};

export const setGlobalError_tc =
  (
    errorText: string
  ): ThunkAction<void, AppState_type, unknown, Actions_types> =>
  (dispatch) => {
    dispatch(appActions.addGlobalError_ac(errorText));

    setTimeout(() => {
      dispatch(appActions.removeGlobalError_ac());
    }, 5000);
  };

export const initializeApp_tc = (): thunk_type => async (dispatch) => {
  try {
    await dispatch(getAuthUserData_tc());
    dispatch(appActions.initializedSuccess_ac());
  } catch (error: any) {
    dispatch(setGlobalError_tc(error.message));
  }
};

export default appReducer;
