import { authAPI } from "api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_USER_AUTH = "SET-USER-AUTH";
const SET_USER_ID = "SET-USER-ID";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: null,
  //isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    case SET_USER_AUTH: {
      return {
        ...state,
        isAuth: action.isAuth,
      };
    }

    case SET_USER_ID: {
      return {
        ...state,
        userId: action.userId,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData_ac = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const setAuthAuth_ac = (isAuth) => ({
  type: SET_USER_AUTH,
  isAuth,
});

export const setAuthUserId_ac = (userId) => ({
  type: SET_USER_ID,
  userId,
});

export const authUser_tc = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode !== 0) {
      dispatch(setAuthAuth_ac(false));
      data.messages.forEach((msg) => alert(msg));
    } else {
      dispatch(setAuthAuth_ac(true));
      dispatch(setAuthUserId_ac(data.data.userId));
    }
  });
};

export const getAuthUserData_tc = () => (dispatch) => {
  authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData_ac(id, email, login));
      dispatch(setAuthAuth_ac(true));
    } else {
      dispatch(setAuthAuth_ac(false));
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
