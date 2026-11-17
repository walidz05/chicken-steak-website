import { NavLink } from "react-router-dom";
import { navLinks } from "./navbarData";
const NavLinks = ({ color, hoverColor, onNavigate }) => {
  return (
    <>
      <>
        {navLinks.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            onClick={onNavigate}
            className={`
                      ${color}
                      uppercase
                       ${hoverColor}
                      transition-all
                      duration-300
                      font-Raleway
                      text-[12px]
                      font-semibold
                      tracking-wide
                    `}
          >
            {item.title}
          </NavLink>
        ))}
      </>
    </>
  );
};

export default NavLinks;
