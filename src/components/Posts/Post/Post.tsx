import c from "./Post.module.css";

type props_type = {
  msg: string;
};

const Post: React.FC<props_type> = ({ msg }) => {
  return (
    <div className={c.post}>
      <div className={c.photo}></div>
      {msg}
    </div>
  );
};

export default Post;
