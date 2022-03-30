import MyPostsContainer from "components/Posts/UserPosts/UserPostsContainer";
import ProfileInfo from "components/Profile/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
