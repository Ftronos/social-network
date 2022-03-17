import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import k from "./Kits.module.css";
import "./App.css";
import Dialogs from "./components/pages/Dialogs/Dialogs";
import Profile from "./components/pages/Profile/Profile";
import Header from "./components/template/Header/Header";
import Sidebar from "./components/template/Sidebar/Sidebar";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state={props.state.sidebar} />
        <div className={`${k.container} content`}>
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  dispatch={props.dispatch}
                  state={props.state.profilePage}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dispatch={props.dispatch}
                  state={props.state.dialogsPage}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
