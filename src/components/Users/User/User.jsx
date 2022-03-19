import Button from "components/Kits/Buttons/Button/Button";
import c from "./User.module.css";

const User = (state) => {
  const onStartFollow = () => {
    state.startFollowUser(state.user.id);
  };

  return (
    <div className={c.user}>
      <img
        className={c.user__photo}
        src={state.user.photoSrc}
        alt={state.user.fullname}
      />
      <Button
        classname={c.user__button}
        buttonText={
          state.user.isFollowed ? state.followedText : state.unfollowedText
        }
        click={onStartFollow}
      />
      <div className={c.user__info}>
        <div>{state.user.fullname}</div>
        <div className={c.user__location}>{state.user.location}</div>
        <div className={c.user__status}>{state.user.status}</div>
      </div>
    </div>
  );
};

export default User;
