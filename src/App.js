import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import k from "./Kits.module.css";
import "./App.css";
import DialogsContainer from "components/pages/Dialogs/DialogsContainer";
import UsersListContainer from "components/Users/UsersListContainer";
import Sidebar from "components/template/Sidebar/Sidebar";
import ProfileContainer from "components/pages/Profile/ProfileContainer";
import HeaderContainer from "./components/template/Header/HeaderContainer";
import LoginPageContainer from "./components/pages/Login/LoginPageContainer";
import { Component } from "react";
import { connect } from "react-redux";
import { initializeApp_tc } from "./redux/app_reducer";
import Loader from "components/Kits/Loader/Loader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp_tc();
  }

  render() {
    if (!this.props.isInitialized) {
      return <Loader />;
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Sidebar />
          <div className={`${k.container} content`}>
            <Routes>
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users/" element={<UsersListContainer />} />
              <Route path="/login/" element={<LoginPageContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp_tc })(App);
