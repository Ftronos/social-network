import Loader from "components/Kits/Loader/Loader";
import c from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }

  return (
    <div className={c.profile}>
      <img
        className={c.profile__image}
        src={props.profile?.photos?.small || ""}
        alt={props.profile?.fullName || ""}
      />
      <div className={c.profile__details}>
        <ProfileStatus status="Hello my friends" />
        <h2 className={c.profile__name}>{props.profile?.fullName || ""}</h2>
        <p>{props.profile?.aboutMe || ""}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
