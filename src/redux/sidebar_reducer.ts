import { AnyAction } from "redux";
import { nav_type } from "types/types";

let initialState = {
  nav: [
    { id: 1, name: "Профиль", link: "/profile" },
    { id: 2, name: "Сообщения", link: "/dialogs" },
    { id: 3, name: "Пользователи", link: "/users" },
  ] as Array<nav_type>,
};

export type initialState_type = typeof initialState;

const sidebarReducer = (
  state = initialState,
  action: AnyAction
): initialState_type => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default sidebarReducer;
