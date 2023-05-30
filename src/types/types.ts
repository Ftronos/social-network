export type photos_type = {
  large: string | null;
  small: string | null;
};

export type profile_type = {
  userId: number | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  photos: photos_type;
  aboutMe: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
};

export type post_type = {
  id: number;
  text: string;
};

export type user_type = {
  id: number;
  name: string;
  status: string;
  photos: photos_type;
  followed: boolean;
  location: string;
};

export type nav_type = {
  id: number;
  name: string;
  link: string;
};

export type message_type = {
  id: number;
  text: string;
  position: "left" | "right";
};

export type dialog_type = {
  id: number;
  name: string;
};
