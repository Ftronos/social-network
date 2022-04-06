import { authAPI } from "api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: "",
  //isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case SET_CAPTCHA_URL: {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData_ac = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const setCaptchaUrl_ac = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  captchaUrl,
});

export const loginUser_tc =
  (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then((data) => {
      if (data.resultCode !== 0) {
        dispatch(setAuthUserData_ac(null, null, null, false));
        let errorMessage =
          data.messages.length > 0 ? data.messages[0] : "Some error";

        dispatch(stopSubmit("loginForm", { _error: errorMessage }));

        if (data.resultCode === 10) {
          authAPI.getCaptchaUrl().then((data) => {
            dispatch(setCaptchaUrl_ac(data.url));
          });
        }
      } else {
        dispatch(getAuthUserData_tc());
      }
    });
  };

export const logoutUser_tc = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData_ac(null, null, null, false));
    }
  });
};

export const getAuthUserData_tc = () => (dispatch) => {
  return authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData_ac(id, email, login, true));
    } else {
      dispatch(setAuthUserData_ac(null, null, null, false));
    }
  });
};

// export const login_tc = (email, password, rememberMe, captcha) => (dispatch) => {
//   authAPI.login(email, password, rememberMe, captcha).then((data) => {
//     if (data.resultCode === 0) {
//       dispatch(setAuthUserData_ac(data.data.userId, email, login));
//     }
//   })
// }

export default authReducer;
