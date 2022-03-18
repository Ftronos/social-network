import MyPostsContainer from "components/Posts/UserPosts/UserPostsContainer";
import ProfileInfoContainer from "components/Profile/ProfileInfoContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfoContainer store={props.store} />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
