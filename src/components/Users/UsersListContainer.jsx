import { connect } from "react-redux";
import UsersList from "./UsersList";
import { startUserFollowActionCreator } from "./../../redux/users_reducer";

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startFollowUser: (id) => {
      dispatch(startUserFollowActionCreator(id));
    },
  };
};

const UsersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);

export default UsersListContainer;
