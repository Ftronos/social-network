import React from "react";
import MyPosts from "components/Posts/UserPosts/UserPosts";
import { updateNewPostTextActionCreator } from "redux/profile_reducer";
import { addPostActionCreator } from "redux/profile_reducer";

const MyPostsContainer = (props) => {
  const state = props.store.getState().profilePage;
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);

    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.myPosts}
      newPostText={state.newPostText}
    />
  );
};

export default MyPostsContainer;
