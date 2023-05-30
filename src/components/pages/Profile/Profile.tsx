import MyPostsContainer from "components/Posts/UserPosts/UserPostsContainer";
import ProfileInfo from "components/Profile/ProfileInfo";
import Loader from "../../Kits/Loader/Loader";
import { profile_type } from "types/types";

type props_type = {
  profile: profile_type;
  isOwner: boolean;
  status: string;
  updateMainPhoto: (photo: Blob) => void;
  updateStatus: (status: string) => void;
  saveProfile: (profile: profile_type) => void;
};

const Profile: React.FC<props_type> = ({
  isOwner,
  profile,
  status,
  updateMainPhoto,
  updateStatus,
  saveProfile,
  ...props
}) => {
  if (!profile) {
    return <Loader />;
  }

  return (
    <div>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateMainPhoto={updateMainPhoto}
        updateStatus={updateStatus}
        saveProfile={saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
