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

class UsersListContainer extends React.Component {
  onPageChaned = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalPagesCount(response.data.totalCount);
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
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
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
