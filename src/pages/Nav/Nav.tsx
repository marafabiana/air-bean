import "./nav.scss";
import Navigation from "./Navigation";
import { navigationLinks } from "../../constants/constants"
import  CloseIcon  from "../../assets/close.svg"

const Nav = () => {
    const handleClose = () => {
        window.history.back();
    }
  return (
        <nav className="nav">
            
            <img src={CloseIcon} alt="Close" onClick={handleClose} />
            
            <section className="links">
                <Navigation navigationLinks={navigationLinks} />
            </section>
            
        </nav>
  );
};

export default Nav