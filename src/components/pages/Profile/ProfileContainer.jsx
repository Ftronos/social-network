import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "redux/profile_reducer";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";

const ProfileContainer = (props) => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId")
    ? searchParams.get("userId")
    : props.myId;

  if (!props.profile || props.profile.userId !== userId) {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }

  return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  myId: state.auth.userId,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
