import { connect } from "react-redux";
import UsersList from "./UsersList";
import {
  followUserActionCreator,
  unfollowUserActionCreator,
  setUsersActionCreator,
} from "./../../redux/users_reducer";

const defaultUsers = [
  {
    id: 1,
    fullname: "Teo",
    location: "Moscow, Russia",
    status: "Hi, i'm there",
    photoSrc: "https://www.icloudunlock.org/img/team/team3.png",
    isFollowed: false,
  },
  {
    id: 2,
    fullname: "Migel",
    location: "Orel, Russia",
    status: "I love you!",
    photoSrc: "https://www.icloudunlock.org/img/team/team3.png",
    isFollowed: false,
  },
  {
    id: 3,
    fullname: "Chloe",
    location: "Novosibirsk, Russia",
    status: "Here we go",
    photoSrc: "https://www.icloudunlock.org/img/team/team3.png",
    isFollowed: false,
  },
  {
    id: 4,
    fullname: "Max",
    location: "Minsk, Belarus",
    status: "React is awesome oO",
    photoSrc: "https://www.icloudunlock.org/img/team/team3.png",
    isFollowed: false,
  },
  {
    id: 5,
    fullname: "Max",
    location: "Minsk, Belarus",
    status: "React is awesome oO",
    photoSrc: "https://www.icloudunlock.org/img/team/team3.png",
    isFollowed: false,
  },
  {
    id: 6,
    fullname: "Max",
    location: "Minsk, Belarus",
    status: "React is awesome oO",
    photoSrc: "https://www.icloudunlock.org/img/team/team3.png",
    isFollowed: false,
  },
  {
    id: 7,
    fullname: "Max",
    location: "Minsk, Belarus",
    status: "React is awesome oO",
    photoSrc: "https://www.icloudunlock.org/img/team/team3.png",
    isFollowed: false,
  },
];

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users.length ? state.usersPage.users : defaultUsers,
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
