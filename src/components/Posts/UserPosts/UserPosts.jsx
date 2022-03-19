import Post from "components/Posts/Post/Post";
import c from "./UserPosts.module.css";
import k from "Kits.module.css";
import React from "react";
import Button from "components/Kits/Buttons/Button/Button";

const Posts = (props) => {
  const postsElements = props.profilePage.myPosts.map((item) => (
    <Post msg={item.text} key={item.id} />
  ));

  const textarea = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = textarea.current.value;

    props.updateNewPostText(text);
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
        value={props.profilePage.newPostText}
      />
      <Button click={onAddPost} buttonText="Добавить" />
      {/* <button className={k.button} onClick={addPost}>
        Добавить
      </button> */}
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
