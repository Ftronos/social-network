import MyPosts from "components/Posts/UserPosts/UserPosts";
import { propfileActions } from "redux/profile_reducer";
import { connect } from "react-redux";
import { AppState_type } from "redux/redux-store";
import { post_type } from "types/types";

type MapStateProps_type = {
  userPosts: Array<post_type>;
  newPostText: string | null;
};
type MapDispatchProps_type = {
  addPost: (text: string) => void;
};
type OwnProps_type = {};

const mapStateToProps = (state: AppState_type): MapStateProps_type => {
  return {
    userPosts: state.profilePage.myPosts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect<
  MapStateProps_type,
  MapDispatchProps_type,
  OwnProps_type,
  AppState_type
>(mapStateToProps, {
  addPost: propfileActions.addPost_ac,
})(MyPosts);

export default MyPostsContainer;
