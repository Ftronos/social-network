import MyPosts from "components/Posts/UserPosts/UserPosts";
import { updateNewPostText } from "redux/profile_reducer";
import { addPost_ac } from "redux/profile_reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost: addPost_ac,
  updateNewPostText,
})(MyPosts);

export default MyPostsContainer;
