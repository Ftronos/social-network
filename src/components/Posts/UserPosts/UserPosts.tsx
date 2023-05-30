import Post from "components/Posts/Post/Post";
import c from "./UserPosts.module.css";
import React from "react";
import AddPostForm from "./UserPostsForm";
import { post_type } from "types/types";

type props_type = {
  userPosts: Array<post_type>;
  addPost: (text: string) => void;
  newPostText: string | null;
};

export type UserPostsFormValues_type = {
  postText: string;
};

let Posts: React.FC<props_type> = ({ userPosts, addPost, newPostText }) => {
  const postsElements = userPosts.map((item: post_type) => (
    <Post msg={item.text} key={item.id} />
  ));

  const onAddPost = (formData: UserPostsFormValues_type) => {
    addPost(formData.postText);
  };

  return (
    <div>
      <AddPostForm onSubmit={onAddPost} postText={newPostText} />
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

Posts = React.memo(Posts);

export default Posts;
