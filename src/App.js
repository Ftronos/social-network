import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import k from "./Kits.module.css";
import "./App.css";
import DialogsContainer from "components/pages/Dialogs/DialogsContainer";
import UsersListContainer from "components/Users/UsersListContainer";
import Sidebar from "components/template/Sidebar/Sidebar";
import ProfileContainer from "components/pages/Profile/ProfileContainer";
import HeaderContainer from "./components/template/Header/HeaderContainer";

function App(props) {
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
