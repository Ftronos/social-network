import Nav from "components/template/Nav/Nav";
import c from "./Sidebar.module.css";
import k from "Kits.module.css";

const Sidebar = () => {
  return (
    <aside className={c.sidebar + " " + k.container}>
      <Nav />
    </aside>
  );
};

export default Sidebar;
