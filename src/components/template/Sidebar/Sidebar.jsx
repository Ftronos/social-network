import c from "./Sidebar.module.css";
import k from "Kits.module.css";
import NavContainer from "components/template/Nav/NavContainer";

const Sidebar = () => {
  return (
    <aside className={c.sidebar + " " + k.container}>
      <NavContainer />
    </aside>
  );
};

export default Sidebar;
