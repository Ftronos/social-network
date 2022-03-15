import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.post}>
      <div className={c.photo}></div>
      {props.msg}
    </div>
  )
}

export default Post;