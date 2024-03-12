import { useNavigate } from "react-router-dom";
import "./landing.scss";
import HeaderLeftIcon  from "../../assets/header-left.svg";
import HeaderRightIcon from "../../assets/header-right.svg";
import WelcomeIcon from "../../assets/welcome-icon.svg";
import WelcomeText from "../../assets/welcome-text.svg";


const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/nav");
  }

  return (
    <div className="landing" onClick={handleClick}>

      <img src={HeaderLeftIcon} alt="" className="header-img" />
      <section className="welcome-icon">
        <img src={WelcomeIcon} alt=""/>
        <img src={WelcomeText} alt=""/>
      </section>
      <img src={HeaderRightIcon} alt="" className="header-img" />
       
    </div>
  )
}

export default Landing