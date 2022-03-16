import MyPosts from "components/Posts/UserPosts/UserPosts";
import ProfileInfo from "components/Profile/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo user={props.state.user} />
      <MyPosts dispatch={props.dispatch} state={props.state} />
    </div>
  );
};

export default Profile;
