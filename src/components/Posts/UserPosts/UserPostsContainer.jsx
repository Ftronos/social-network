import MyPosts from "components/Posts/UserPosts/UserPosts";
import { addPost_ac } from "redux/profile_reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost: addPost_ac,
})(MyPosts);

export default MyPostsContainer;
