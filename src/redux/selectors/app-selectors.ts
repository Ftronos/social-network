import { AppState_type } from "redux/redux-store";

export const getGlobalErrors = (state: AppState_type) => state.app.globalErrors;
