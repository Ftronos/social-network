import userAvatar from "assets/images/noavatar.png";
import { useState } from "react";
import c from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import Button from "components/Kits/Buttons/Button/Button";
import ProfileDataForm from "./ProfileInfoDataForm";
import { profile_type } from "types/types";

type ContactProps_type = {
  contact: Array<string>;
};

const Contact: React.FC<ContactProps_type> = ({
  contact: [contactTitle, contactValue],
}) => {
  return (
    <p>
      {contactTitle}: {contactValue}
    </p>
  );
};

type ProfileDataProps_type = {
  profile: profile_type;
  isOwner: boolean;
  setEditMode: () => void;
};

const ProfileData: React.FC<ProfileDataProps_type> = ({
  profile,
  isOwner,
  setEditMode,
}) => {
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

type props_type = {
  profile: profile_type;
  isOwner: boolean;
  status: string;
  updateMainPhoto: (photo: Blob) => void;
  updateStatus: (status: string) => void;
  saveProfile: (profile: profile_type) => void;
};

const ProfileInfo: React.FC<props_type> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  updateMainPhoto,
  saveProfile,
  ...props
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const onSubmit = async (formData: profile_type) => {
    await saveProfile(formData);

    setEditMode(false);
  };

  const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
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
