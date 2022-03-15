import Post from "components/Posts/Post/Post";
import c from "./UserPosts.module.css";
import k from "Kits.module.css";
import React from "react";
import Button from "components/Kits/Buttons/Button/Button";

const Posts = (props) => {
  const postsElements = props.store
    .getState()
    .profilePage.myPosts.map((item) => <Post msg={item.text} key={item.id} />);

  const textarea = React.createRef();

  const addPost = () => {
    props.store.addPost();
    props.store.updateNewPostText("");
  };

  const onPostChange = () => {
    let text = textarea.current.value;

    props.store.updateNewPostText(text);
  };

  return (
    <div>
      <textarea
        ref={textarea}
        name=""
        id=""
        cols="30"
        rows="10"
        className={k.input}
        onChange={onPostChange}
        value={props.store.getState().profilePage.newPostText}
      />
      {/* <Button
        click={addPost}
        buttonText="Добавить"
      /> */}
      <button className={k.button} onClick={addPost}>
        Добавить
      </button>
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
