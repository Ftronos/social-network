import c from "./UsersList.module.css";
import User from "./User/User";
import Button from "components/Kits/Buttons/Button/Button";

const UsersList = (props) => {
  const usersElements = props.users.map((item) => (
    <User
      user={item}
      followText={props.followText}
      unfollowText={props.unfollowText}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
      key={item.id}
    />
  ));

  // const showMoreUsers = () => {
  //   setTimeout(() => {
  //     props.showMoreUsers();
  //   }, 1000);
  // };

  return (
    <div>
      {usersElements}
      <Button buttonText={props.showMoreBtnText} />
    </div>
  );
};

export default UsersList;
