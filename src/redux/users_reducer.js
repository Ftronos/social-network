const START_USER_FOLLOW = "START-USER-FOLLOW";

let initialState = {
  users: [
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
  ],
  followedText: "Following",
  unfollowedText: "Follow",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_USER_FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, isFollowed: true } : user
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export const startUserFollowActionCreator = (id) => {
  return {
    type: START_USER_FOLLOW,
    userId: id,
  };
};

export default usersReducer;
