import MyPosts from "components/Posts/UserPosts/UserPosts";
import { addPost_ac } from "redux/profile_reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    userPosts: state.profilePage.myPosts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost: addPost_ac,
})(MyPosts);

export default MyPostsContainer;
