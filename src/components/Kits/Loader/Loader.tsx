import c from "./Loader.module.css";
import loader from "assets/images/loader.gif";

const Loader = () => {
  return (
    <div className={c.layout}>
      <img src={loader} alt="loader" className={c.loader} />
    </div>
  );
};

export default Loader;
