import React from "react";
import { connect } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import {
  getProfile,
  getStatus,
  updateStatus,
  updateMainPhoto,
} from "redux/profile_reducer";
import Profile from "./Profile";

const ProfileContainer = ({
  myId,
  profile,
  status,
  getProfile,
  getStatus,
  updateStatus,
  ...props
}) => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId") ? searchParams.get("userId") : myId;

  if (!userId) {
    return <Navigate to="/login" />;
  }

  if (!profile || +profile?.userId !== +userId) {
    getProfile(userId);
    getStatus(userId);
  }

  return (
    <Profile
      {...props}
      isOwner={!searchParams.get("userId")}
      profile={profile}
      status={status || "Расскажите о себе"}
      updateStatus={updateStatus}
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
  updateMainPhoto,
})(ProfileContainer);
