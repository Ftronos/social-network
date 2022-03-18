import MyPostsContainer from "components/Posts/UserPosts/UserPostsContainer";
import ProfileInfoContainer from "components/Profile/ProfileInfoContainer";

const Profile = () => {
  return (
    <div>
      <ProfileInfoContainer />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
