import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

const store = {
  _callSubscriber: function () {
    console.log("State has been changed");
  },

  _state: {
    dialogsPage: {
      newMessageText: "",
      dialogs: [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
        { id: 4, name: "User 4" },
        { id: 5, name: "User 5" },
        { id: 6, name: "User 6" },
      ],
      messages: [
        { id: 1, text: "111", position: "left" },
        { id: 2, text: "222", position: "left" },
        { id: 3, text: "333", position: "right" },
        { id: 4, text: "444", position: "right" },
        { id: 5, text: "555", position: "left" },
      ],
    },
    profilePage: {
      newPostText: "Hello!",
      myPosts: [
        { id: 1, text: "Hello!" },
        { id: 2, text: "How are you?" },
        { id: 3, text: "Thanks, fine!" },
      ],
      user: {
        avatarSrc: "https://www.icloudunlock.org/img/team/team3.png",
        topImgSrc:
          "https://sun9-54.userapi.com/c841533/v841533506/17243/KspzninTAnE.jpg",
        name: "User 1",
        dateBirth: "01.01.2000",
        city: "г. Москва",
      },
    },
    sidebar: {
      nav: [
        { id: 1, name: "Профиль", link: "/profile" },
        { id: 2, name: "Сообщения", link: "/dialogs" },
      ],
    },
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if (!action.type) {
      console.error("Missing type, define action type");
      return false;
    }

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._callSubscriber(this);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
