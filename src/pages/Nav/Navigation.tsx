
import { NavLink } from "react-router-dom";

type NavigationProps = {
    navigationLinks: {
        name: string;
        href: string;
    }[];
};

const Navigation = ({ navigationLinks }: NavigationProps) => {
  console.log("navigationLinks", navigationLinks);


  const links = navigationLinks.map(({ name, href }) => (
    <li key={name}>
      <NavLink to={href}>{name}</NavLink>
    </li>
  ));
  return (
  <div>
      <ul className="navigation-wrapper">{links}</ul>
  </div>

  )
};


export default Navigation;