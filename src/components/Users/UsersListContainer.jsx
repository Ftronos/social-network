import { connect } from "react-redux";
import UsersList from "./UsersList";
import axios from "axios";
import React from "react";
import {
  followUser,
  unfollowUser,
  setUsers,
  setTotalPagesCount,
  setCurrentPage,
  toggleIsFetching,
} from "./../../redux/users_reducer";
import Loader from "components/Kits/Loader/Loader";
import { usersAPI } from "api/api";

class UsersListContainer extends React.Component {
  onPageChaned = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalPagesCount(data.totalCount);
      });
  }

  followUser(userId) {
    this.props.toggleIsFetching(true);

    usersAPI.followUser(userId).then((data) => {
      this.props.toggleIsFetching(false);
      if (data.resultCode === 0) {
        this.props.followUser(userId);
      }
    });
  }

  unfollowUser(userId) {
    this.props.toggleIsFetching(true);

    usersAPI.unfollowUser(userId).then((data) => {
      this.props.toggleIsFetching(false);
      if (data.resultCode === 0) {
        this.props.unfollowUser(userId);
      }
    });
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
          followUser={(userId) => this.followUser(userId)}
          unfollowUser={(userId) => this.unfollowUser(userId)}
          showMoreBtnText={this.props.showMoreBtnText}
          users={this.props.users}
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
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setTotalPagesCount,
  setCurrentPage,
  toggleIsFetching,
})(UsersListContainer);
