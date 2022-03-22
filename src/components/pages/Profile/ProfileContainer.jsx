import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "redux/profile_reducer";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";

const ProfileContainer = (props) => {
  const [searchParams] = useSearchParams();

  if (!props.profile) {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${searchParams.get(
          "userId"
        )}`
      )
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }

  return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
