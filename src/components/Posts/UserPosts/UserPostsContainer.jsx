import MyPosts from "components/Posts/UserPosts/UserPosts";
import { updateNewPostText } from "redux/profile_reducer";
import { addPost } from "redux/profile_reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPost());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostText(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
