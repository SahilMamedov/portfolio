import { StyledNav } from "./styled";
import { NavLink } from "react-router-dom";
import { links } from "components/shared/Links";
import { useLocation } from "react-router-dom";
const PhoneSideBar = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      {links.map((link, i) => {
        return (
          <NavLink
            className={pathname === link.path ? "text-blue-600" : ""}
            key={i}
            to={link.path}
          >
            {link.icon}
          </NavLink>
        );
      })}
    </StyledNav>
  );
};

export default PhoneSideBar;
