const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const store = {
  renderEntireTree: function () {
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
  },

  getState() {
    return this._state;
  },

  _addPost() {
    if (!this._state.profilePage.newPostText) {
      console.error("Empty post text");

      return false;
    }

    this._state.profilePage.myPosts.push({
      id: this._state.profilePage.myPosts.length + 1,
      text: this._state.profilePage.newPostText,
    });

    this.renderEntireTree(this);
  },

  _updateNewPostText(postMessage) {
    this._state.profilePage.newPostText = postMessage;

    this.renderEntireTree(this);
  },

  _addMessage() {
    if (!this._state.dialogsPage.newMessageText) {
      console.error("Empty message text");

      return false;
    }

    this._state.dialogsPage.messages.push({
      id: this._state.dialogsPage.messages.length + 1,
      text: this._state.dialogsPage.newMessageText,
    });

    this.renderEntireTree(this);
  },

  _updateNewMessageText(postMessage) {
    this._state.dialogsPage.newMessageText = postMessage;

    this.renderEntireTree(this);
  },

  dispatch(action) {
    if (!action.type) {
      console.error("Missing type, define action type");
      return false;
    }

    switch (action.type) {
      case ADD_POST:
        this._addPost();

        break;

      case UPDATE_NEW_POST_TEXT:
        this._updateNewPostText(action.postMessage);

        break;

      case ADD_MESSAGE:
        this._addMessage(action.postMessage);

        break;

      case UPDATE_NEW_MESSAGE_TEXT:
        this._updateNewMessageText(action.message);

        break;

      default:
        console.error("Нет такого action");

        break;
    }
  },

  subscribe(observer) {
    this.renderEntireTree = observer;
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    postMessage: text,
  };
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    message: text,
  };
};

export default store;
