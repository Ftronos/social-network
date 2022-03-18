import React from "react";
import MyPosts from "components/Posts/UserPosts/UserPosts";
import { updateNewPostTextActionCreator } from "redux/profile_reducer";
import { addPostActionCreator } from "redux/profile_reducer";
import StoreContext from "storeContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().profilePage;
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);

          store.dispatch(action);
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.myPosts}
            newPostText={state.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
