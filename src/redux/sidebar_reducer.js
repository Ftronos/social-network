let initialState = {
  nav: [
    { id: 1, name: "Профиль", link: "/profile" },
    { id: 2, name: "Сообщения", link: "/dialogs" },
    { id: 3, name: "Пользователи", link: "/users" },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default sidebarReducer;
