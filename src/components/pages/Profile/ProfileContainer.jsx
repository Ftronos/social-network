import React from "react";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "redux/profile_reducer";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import WithAuthRedirect from "components/HOC/WithAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId")
    ? searchParams.get("userId")
    : props.myId;

  if (!props.profile || +props.profile?.userId !== +userId) {
    props.getProfile(userId);
    props.getStatus(userId);
  }

  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status || "Расскажите о себе"}
      updateStatus={props.updateStatus}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  myId: state.auth.userId,
  status: state.profilePage.status,
});

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, { getProfile, getStatus, updateStatus })
)(ProfileContainer);
