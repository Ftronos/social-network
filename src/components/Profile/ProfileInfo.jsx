import Loader from "components/Kits/Loader/Loader";
import c from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }

  console.log(props.profile?.photos?.small);

  return (
    <div className={c.profile}>
      {/* <img src={props.profile.topImgSrc} alt="" className={c.topImage} /> */}
      <img
        className={c.profile__image}
        src={props.profile?.photos?.small || ""}
        alt={props.profile?.fullName || ""}
      />
      <div className={c.profile__details}>
        <h2 className={c.profile__name}>{props.profile?.fullName || ""}</h2>
        <p>{props.profile?.aboutMe || ""}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
