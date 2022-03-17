import Nav from "components/template/Nav/Nav";
import c from "./Sidebar.module.css";
import k from "Kits.module.css";

const Sidebar = (props) => {
  return (
    <aside className={c.sidebar + " " + k.container}>
      <Nav state={props.state} />
    </aside>
  );
};

export default Sidebar;
