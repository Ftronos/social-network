import Loader from "components/Kits/Loader/Loader";
import c from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userAvatar from "assets/images/noavatar.png";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  updateMainPhoto,
  ...props
}) => {
  if (!profile) {
    return <Loader />;
  }

  const onMainPhotoSelected = (e) => {
    if (!e.target.files.length) {
      return false;
    }

    const file = e.target.files[0];

    updateMainPhoto(file);
  };

  return (
    <div className={c.profile}>
      <img
        className={c.profile__image}
        src={profile?.photos?.large || userAvatar}
        alt={profile?.fullName || ""}
      />
      <div className={c.profile__details}>
        <ProfileStatus status={status} updateStatus={updateStatus} />
        <h2 className={c.profile__name}>{profile?.fullName || ""}</h2>
        <p>{profile?.aboutMe || ""}</p>
      </div>
      {isOwner && (
        <div>
          <input type="file" onChange={onMainPhotoSelected} />
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
