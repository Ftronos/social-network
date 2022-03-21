import { connect } from "react-redux";
import UsersList from "./UsersList";
import {
  followUserActionCreator,
  unfollowUserActionCreator,
  setUsersActionCreator,
} from "./../../redux/users_reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    followText: state.usersPage.followText,
    unfollowText: state.usersPage.unfollowText,
    showMoreBtnText: state.usersPage.showMoreBtnText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (id) => {
      dispatch(followUserActionCreator(id));
    },
    unfollowUser: (id) => {
      dispatch(unfollowUserActionCreator(id));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
  };
};

const UsersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);

export default UsersListContainer;
