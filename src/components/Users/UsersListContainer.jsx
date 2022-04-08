import Loader from "components/Kits/Loader/Loader";
import React from "react";
import { connect } from "react-redux";
import {
  getPageUsers,
  gePageSize,
  getTotalUsersCount,
  getCurrentPage,
  getFollowText,
  getUnfollowText,
  getShowMoreBtnText,
  getIsFetching,
  getFollowingInProgress,
} from "redux/selectors/users-selectors";

import {
  followUser,
  followUserSuccess,
  getUsers,
  setCurrentPage,
  unfollowUser,
  unfollowUserSuccess,
} from "./../../redux/users_reducer";
import UsersList from "./UsersList";

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
    users: getPageUsers(state),
    pageSize: gePageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    followText: getFollowText(state),
    unfollowText: getUnfollowText(state),
    showMoreBtnText: getShowMoreBtnText(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  followUserSuccess,
  unfollowUserSuccess,
  setCurrentPage,
  getUsers,
  followUser,
  unfollowUser,
})(UsersListContainer);
