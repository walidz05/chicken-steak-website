import React, { useState } from "react";
import { navLinks } from "./navbarData";
const NavLinks = ({ color, hoverColor }) => {
  return (
    <>
      <>
        {navLinks.map((item) => (
          <a
            key={item.id}
            href={item.path}
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
          </a>
        ))}
      </>
    </>
  );
};

export default NavLinks;
