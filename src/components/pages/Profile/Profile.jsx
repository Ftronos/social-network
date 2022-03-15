import MyPosts from "components/Posts/UserPosts/UserPosts";
import ProfileInfo from "components/Profile/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo user={props.store.getState().profilePage.user} />
      <MyPosts store={props.store} />
    </div>
  );
};

export default Profile;
