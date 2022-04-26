import { getAuthUserData_tc } from "redux/auth_reducer";
const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";
const ADD_GLOBAL_ERROR = "SET-GLOBAL-ERROR";
const REMOVE_GLOBAL_ERROR = "REMOVE-GLOBAL-ERROR";

const initialState = {
  initialized: false,
  globalErrors: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    case ADD_GLOBAL_ERROR: {
      console.log(action.errorText);

      return {
        ...state,
        globalErrors: [...state.globalErrors, action.errorText],
      };
    }

    case REMOVE_GLOBAL_ERROR: {
      return {
        ...state,
        globalErrors: state.globalErrors.slice(1),
      };
    }

    default:
      return state;
  }
};

export const initializedSuccess_ac = () => ({
  type: INITIALIZED_SUCCESS,
});

export const addGlobalError_ac = (errorText) => ({
  type: ADD_GLOBAL_ERROR,
  errorText,
});

export const removeGlobalError_ac = () => ({
  type: REMOVE_GLOBAL_ERROR,
});

export const setGlobalError_tc = (errorText) => (dispatch) => {
  dispatch(addGlobalError_ac(errorText));

  setTimeout(() => {
    dispatch(removeGlobalError_ac());
  }, 5000);
};

export const initializeApp_tc = () => async (dispatch) => {
  try {
    await dispatch(getAuthUserData_tc());
    dispatch(initializedSuccess_ac());
  } catch (error) {
    dispatch(setGlobalError_tc(error.message));
  }
};

export default appReducer;
