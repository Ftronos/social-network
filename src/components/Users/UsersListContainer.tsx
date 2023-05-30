import Loader from "components/Kits/Loader/Loader";
import React from "react";
import { connect } from "react-redux";
import { AppState_type } from "redux/redux-store";
import {
  gePageSize,
  getCurrentPage,
  getFollowingInProgress,
  getFollowText,
  getIsFetching,
  getPageUsers,
  getShowMoreBtnText,
  getTotalUsersCount,
  getUnfollowText,
} from "redux/selectors/users-selectors";
import { user_type } from "types/types";
import {
  followUser,
  getUsers,
  usersActions,
  unfollowUser,
} from "../../redux/users_reducer";
import UsersList from "./UsersList";

type MapStateProps_type = {
  currentPage: number;
  totalUsersCount: number;
  pageSize: number;
  isFetching: boolean;
  followText: string;
  unfollowText: string;
  showMoreBtnText: string;
  users: Array<user_type>;
  followingInProgress: Array<number>;
};
type MapDispatchProps_type = {
  getUsers: (currentPage: number, pageSize: number) => void;
  setCurrentPage: (pageNumber: number) => void;
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
};

type OwnProps_type = {};

type props_type = MapStateProps_type & MapDispatchProps_type & OwnProps_type;

class UsersListContainer extends React.Component<props_type> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChaned = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  followUserSuccess(userId: number) {
    this.props.followUser(userId);
  }

  unfollowUserSuccess(userId: number) {
    this.props.unfollowUser(userId);
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

const mapStateToProps = (state: AppState_type): MapStateProps_type => {
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

export default connect<
  MapStateProps_type,
  MapDispatchProps_type,
  OwnProps_type,
  AppState_type
>(mapStateToProps, {
  setCurrentPage: usersActions.setCurrentPage,
  getUsers,
  followUser,
  unfollowUser,
})(UsersListContainer);
