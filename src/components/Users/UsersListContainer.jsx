import { connect } from "react-redux";
import UsersList from "./UsersList";
import React from "react";
import {
  followUserSuccess,
  unfollowUserSuccess,
  setCurrentPage,
  followUser,
  unfollowUser,
  getUsers,
} from "./../../redux/users_reducer";
import Loader from "components/Kits/Loader/Loader";
import WithAuthRedirect from "./../HOC/WithAuthRedirect";

class UsersListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChaned = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  followUserSuccess(userId) {
    this.props.followUser(userId, true);
  }

  unfollowUserSuccess(userId) {
    this.props.unfollowUser(userId, false);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <UsersList
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChaned={this.onPageChaned}
          followText={this.props.followText}
          unfollowText={this.props.unfollowText}
          followUserSuccess={(userId) => this.followUserSuccess(userId)}
          unfollowUserSuccess={(userId) => this.unfollowUserSuccess(userId)}
          showMoreBtnText={this.props.showMoreBtnText}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    followText: state.usersPage.followText,
    unfollowText: state.usersPage.unfollowText,
    showMoreBtnText: state.usersPage.showMoreBtnText,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const AuthRedirectComponent = WithAuthRedirect(UsersListContainer);

export default connect(mapStateToProps, {
  followUserSuccess,
  unfollowUserSuccess,
  setCurrentPage,
  getUsers,
  followUser,
  unfollowUser,
})(AuthRedirectComponent);
