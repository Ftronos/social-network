import Button from "components/Kits/Buttons/Button/Button";
import c from "./User.module.css";
import userAvatar from "assets/images/noavatar.png";
import { NavLink } from "react-router-dom";
import { user_type } from "types/types";

type props_type = {
  followUserSuccess: (usreId: number) => void;
  unfollowUserSuccess: (usreId: number) => void;
  user: user_type;
  followText: string;
  unfollowText: string;
  followingInProgress: boolean;
};

const User: React.FC<props_type> = ({
  followUserSuccess,
  unfollowUserSuccess,
  user,
  followText,
  unfollowText,
  followingInProgress,
}) => {
  const onFollowUserSuccess = () => {
    followUserSuccess(user.id);
  };

  const onUnfollowUserSuccess = () => {
    unfollowUserSuccess(user.id);
  };

  return (
    <div className={c.user}>
      <NavLink to={"/profile/?userId=" + user.id}>
        <img
          className={c.user__photo}
          src={user.photos.small ? user.photos.small : userAvatar}
          alt={user.name}
        />
      </NavLink>
      <Button
        disabled={followingInProgress}
        classname={c.user__button}
        buttonText={user.followed ? unfollowText : followText}
        click={user.followed ? onUnfollowUserSuccess : onFollowUserSuccess}
      />
      <div className={c.user__info}>
        <div>{user.name}</div>
        <div className={c.user__location}>{user.location || ""}</div>
        <div className={c.user__status}>{user.status || ""}</div>
      </div>
    </div>
  );
};

export default User;
