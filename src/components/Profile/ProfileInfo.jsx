import c from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={c.profile}>
      <img src={props.user.topImgSrc} alt="" className={c.topImage} />
      <img
        className={c.profile__image}
        src={props.user.avatarSrc}
        alt={props.user.name}
      />
      <div className={c.profile__details}>
        <h2 className={c.profile__name}>{props.user.name}</h2>
        <p>{props.user.dateBirth}</p>
        <p>{props.user.city}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
