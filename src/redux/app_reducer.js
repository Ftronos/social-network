import { getAuthUserData_tc } from "redux/auth_reducer";
const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess_ac = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp_tc = () => (dispatch) => {
  dispatch(getAuthUserData_tc()).then(() => {
    dispatch(initializedSuccess_ac());
  });
};

export default appReducer;
