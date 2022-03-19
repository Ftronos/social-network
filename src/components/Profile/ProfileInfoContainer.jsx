import ProfileInfo from "components/Profile/ProfileInfo";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.profilePage.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

const ProfileInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfo);

export default ProfileInfoContainer;
