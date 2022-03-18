import ProfileInfo from "components/Profile/ProfileInfo";
import StoreContext from "storeContext";

const ProfileInfoContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => <ProfileInfo user={store.getState().profilePage.user} />}
    </StoreContext.Consumer>
  );
};

export default ProfileInfoContainer;
