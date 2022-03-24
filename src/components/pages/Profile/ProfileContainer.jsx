import React from "react";
import Profile from "./Profile";
import { getProfile } from "redux/profile_reducer";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProfileContainer = (props) => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId")
    ? searchParams.get("userId")
    : props.myId;

  if (!props.profile || +props.profile?.userId !== +userId) {
    props.getProfile(userId);
  }

  if (!props.isAuth) {
    return <Navigate to="/login" />;
  }

  return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  myId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getProfile })(ProfileContainer);
