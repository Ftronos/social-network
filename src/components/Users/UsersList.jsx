import c from "./UsersList.module.css";
import User from "./User/User";

const UsersList = (state) => {
  const usersElements = state.usersPage.users.map((item) => (
    <User
      user={item}
      followedText={state.usersPage.followedText}
      unfollowedText={state.usersPage.unfollowedText}
      startFollowUser={state.startFollowUser}
      key={item.id}
    />
  ));

  return <div>{usersElements}</div>;
};

export default UsersList;
