import c from "./UsersList.module.css";
import User from "./User/User";
import Button from "components/Kits/Buttons/Button/Button";
import axios from "axios";
import React from "react";

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  getUsersElements = () =>
    this.props.users.map((item) => (
      <User
        user={item}
        followText={this.props.followText}
        unfollowText={this.props.unfollowText}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        key={item.id}
      />
    ));

  render() {
    return (
      <div>
        {this.getUsersElements()}
        <Button buttonText={this.props.showMoreBtnText} />
      </div>
    );
  }
}

export default UsersList;
