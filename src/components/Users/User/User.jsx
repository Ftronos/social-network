import Button from "components/Kits/Buttons/Button/Button";
import c from "./User.module.css";
import userAvatar from "assets/images/noavatar.png";
import { NavLink } from "react-router-dom";

const User = (state) => {
  const followUser = () => {
    state.followUser(state.user.id);
  };

  const unfollowUser = () => {
    state.unfollowUser(state.user.id);
  };

  return (
    <div className={c.user}>
      <NavLink to={"/profile/?userId=" + state.user.id}>
        <img
          className={c.user__photo}
          src={state.user.photos.small ? state.user.photos.small : userAvatar}
          alt={state.user.name}
        />
      </NavLink>
      <Button
        classname={c.user__button}
        buttonText={state.user.followed ? state.unfollowText : state.followText}
        click={state.user.followed ? unfollowUser : followUser}
      />
      <div className={c.user__info}>
        <div>{state.user.name}</div>
        <div className={c.user__location}>{state.user.location || ""}</div>
        <div className={c.user__status}>{state.user.status || ""}</div>
      </div>
    </div>
  );
};

export default User;
