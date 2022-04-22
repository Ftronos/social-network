import userAvatar from "assets/images/noavatar.png";
import { useState } from "react";
import c from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import Button from "components/Kits/Buttons/Button/Button";
import ProfileDataForm from "./ProfileInfoDataForm";

const Contact = ({ contact: [contactTitle, contactValue] }) => {
  return (
    <p>
      {contactTitle}: {contactValue}
    </p>
  );
};

const ProfileData = ({ profile, isOwner, setEditMode }) => {
  const contactsElements = Object.entries(profile.contacts).map((item, idx) => {
    return <Contact contact={item} key={idx} />;
  });

  return (
    <div>
      <h2 className={c.profile__name}>{profile?.fullName || ""}</h2>
      <p>About me: {profile?.aboutMe || ""}</p>
      <p>Looking for a job: {profile?.lookingForAJob ? "Yes" : "No"}</p>
      {profile?.lookingForAJob && (
        <p>
          Looking for a job description:{" "}
          {profile.lookingForAJobDescription || ""}
        </p>
      )}
      <p>Contacts:</p>
      {contactsElements}
      {isOwner && <Button click={setEditMode} buttonText="Редактировать" />}
    </div>
  );
};

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  updateMainPhoto,
  saveProfile,
  ...props
}) => {
  const [editMode, setEditMode] = useState(false);

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

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
        {editMode ? (
          <ProfileDataForm
            onSubmit={onSubmit}
            profile={profile}
            initialValues={profile}
          />
        ) : (
          <ProfileData
            setEditMode={() => {
              setEditMode(true);
            }}
            isOwner={isOwner}
            profile={profile}
          />
        )}
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
