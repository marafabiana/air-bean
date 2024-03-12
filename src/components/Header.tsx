import "./header.scss";
import HeaderTop from "../assets/header-top.svg";
import NavIcon from "../assets/navicon.svg";
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();

  const handleNavIconClick = () => {
    navigate('/nav');
  };

  return (
    <div className="header-container">
        <img src={HeaderTop} alt="" />
        <button onClick={handleNavIconClick} className="header-nav"><img src={NavIcon} alt="" /></button>
    </div>
  )
}

export default Header