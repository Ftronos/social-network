import { authAPI, resultCodeForCatcha_enum, resultCodes_enum } from "api/api";
import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { AppState_type, InferActionsTypes } from "redux/redux-store";
import { setGlobalError_tc } from "./app_reducer";

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: "" as string | null,
};

export type initialState_type = typeof initialState;

const authReducer = (
  state = initialState,
  action: Actions_types
): initialState_type => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.payload,
      };

    case "SET_CAPTCHA_URL": {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    }

    default:
      return state;
  }
};

type Actions_types = InferActionsTypes<typeof authActions>;

const authActions = {
  setAuthUserData_ac: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "SET_USER_DATA",
      payload: { userId, email, login, isAuth },
    } as const),

  setCaptchaUrl_ac: (captchaUrl: string) =>
    ({
      type: "SET_CAPTCHA_URL",
      captchaUrl,
    } as const),
};

type Thunk_type = ThunkAction<
  Promise<void>,
  AppState_type,
  unknown,
  Actions_types
>;

export const loginUser_tc =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ): ThunkAction<
    Promise<void>,
    AppState_type,
    unknown,
    Actions_types | FormAction
  > =>
  async (dispatch) => {
    try {
      let data = await authAPI.login(email, password, rememberMe, captcha);

      if (data.resultCode !== resultCodes_enum.Success) {
        dispatch(authActions.setAuthUserData_ac(null, null, null, false));
        let errorMessage =
          data.messages.length > 0 ? data.messages[0] : "Some error";

        dispatch(stopSubmit("loginForm", { _error: errorMessage }));

        if (data.resultCode === resultCodeForCatcha_enum.CaptchaIsRequired) {
          try {
            let captchData = await authAPI.getCaptchaUrl();

            dispatch(authActions.setCaptchaUrl_ac(captchData.url));
          } catch (error: any) {
            dispatch(setGlobalError_tc(error.message));
          }
        }
      } else {
        dispatch(getAuthUserData_tc());
      }
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export const logoutUser_tc = (): Thunk_type => async (dispatch) => {
  try {
    let data = await authAPI.logout();

    if (data.resultCode === resultCodes_enum.Success) {
      dispatch(authActions.setAuthUserData_ac(null, null, null, false));
    }
  } catch (error: any) {
    dispatch(setGlobalError_tc(error.message));
  }
};

export const getAuthUserData_tc = (): Thunk_type => (dispatch) => {
  return authAPI.me().then((data) => {
    if (data.resultCode === resultCodes_enum.Success) {
      let { id, email, login } = data.data;
      dispatch(authActions.setAuthUserData_ac(id, email, login, true));
    } else {
      dispatch(authActions.setAuthUserData_ac(null, null, null, false));
    }
  });
};

export default authReducer;
