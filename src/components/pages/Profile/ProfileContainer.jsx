import React from "react";
import Profile from "./Profile";
import { getProfile } from "redux/profile_reducer";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import WithAuthRedirect from "components/HOC/WithAuthRedirect";

const ProfileContainer = (props) => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId")
    ? searchParams.get("userId")
    : props.myId;

  if (!props.profile || +props.profile?.userId !== +userId) {
    props.getProfile(userId);
  }

  return <Profile {...props} profile={props.profile} />;
};

const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  myId: state.auth.userId,
});

export default connect(mapStateToProps, { getProfile })(AuthRedirectComponent);
