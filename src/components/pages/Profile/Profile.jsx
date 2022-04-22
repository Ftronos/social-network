import MyPostsContainer from "components/Posts/UserPosts/UserPostsContainer";
import ProfileInfo from "components/Profile/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateMainPhoto={props.updateMainPhoto}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
