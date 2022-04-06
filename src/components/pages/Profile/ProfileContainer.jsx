import React from "react";
import { connect } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { getProfile, getStatus, updateStatus } from "redux/profile_reducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId")
    ? searchParams.get("userId")
    : props.myId;

  if (!userId) {
    return <Navigate to="/login" />;
  }

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

export default connect(mapStateToProps, {
  getProfile,
  getStatus,
  updateStatus,
})(ProfileContainer);
