import React from "react";
import { connect } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import {
  getProfile,
  getStatus,
  updateStatus,
  updateMainPhoto,
  saveProfile,
} from "redux/profile_reducer";
import { profile_type } from "types/types";
import Profile from "./Profile";
import { AppState_type } from "redux/redux-store";
import Loader from "components/Kits/Loader/Loader";

type MapStateProps_type = {
  myId: number | null;
  profile: profile_type | null;
  status: string | null;
};
type MapDispatchProps_type = {
  getProfile: (userId: number) => void;
  getStatus: (userId: any) => void;
  updateStatus: (status: string) => void;
  saveProfile: (profile: profile_type) => void;
  updateMainPhoto: (photo: Blob) => void;
};
type OwnProps_type = {};

type props_type = MapStateProps_type & MapDispatchProps_type & OwnProps_type;

const ProfileContainer: React.FC<props_type> = ({
  myId,
  profile,
  status,
  getProfile,
  getStatus,
  updateStatus,
  saveProfile,
  ...props
}) => {
  const [searchParams] = useSearchParams();
  const userId: any = searchParams.get("userId")
    ? searchParams.get("userId")
    : myId;

  if (!userId) {
    return <Navigate to="/login" />;
  }

  if (!profile || profile?.userId !== +userId) {
    getProfile(userId);
    getStatus(userId);

    return <Loader />;
  }

  return (
    <Profile
      {...props}
      isOwner={!searchParams.get("userId")}
      profile={profile}
      status={status || "Расскажите о себе"}
      updateStatus={updateStatus}
      saveProfile={saveProfile}
    />
  );
};

const mapStateToProps = (state: AppState_type): MapStateProps_type => ({
  profile: state.profilePage.profile,
  myId: state.auth.userId,
  status: state.profilePage.status,
});

export default connect<
  MapStateProps_type,
  MapDispatchProps_type,
  OwnProps_type,
  AppState_type
>(mapStateToProps, {
  updateStatus,
  getProfile,
  updateMainPhoto,
  saveProfile,
  getStatus,
})(ProfileContainer);
