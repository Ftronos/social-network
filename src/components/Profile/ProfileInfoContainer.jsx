import ProfileInfo from "./ProfileInfo";

const ProfileInfoContainer = (props) => {
  return <ProfileInfo user={props.store.getState().profilePage.user} />;
};

export default ProfileInfoContainer;
