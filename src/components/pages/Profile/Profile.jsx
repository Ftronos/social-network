import MyPostsContainer from "components/Posts/UserPosts/UserPostsContainer";
import ProfileInfo from "components/Profile/ProfileInfo";
import Loader from "./../../Kits/Loader/Loader";

const Profile = (props) => {
  if (!props.profile) {
    return <Loader />;
  }

  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateMainPhoto={props.updateMainPhoto}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
