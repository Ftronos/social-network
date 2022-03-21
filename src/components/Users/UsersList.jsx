import c from "./UsersList.module.css";
import User from "./User/User";
import Button from "components/Kits/Buttons/Button/Button";
import axios from "axios";

const UsersList = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

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
      <Button click={getUsers} buttonText="Get users" />
      {usersElements}
      <Button buttonText={props.showMoreBtnText} />
    </div>
  );
};

export default UsersList;
