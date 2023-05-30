import c from "./Sidebar.module.css";
import k from "Kits.module.css";
import NavContainer from "components/template/Nav/NavContainer";
import cn from "classnames";

const Sidebar = () => {
  return (
    <aside className={cn(c.sidebar, k.container)}>
      <NavContainer />
    </aside>
  );
};

export default Sidebar;
