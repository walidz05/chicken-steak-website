import React from "react";
import NavLinks from "./NavLinks";
import { FaRegUser } from "react-icons/fa";
import Button from "../ui/Button";
const MobileMenu = ({ open }) => {
  return (
    <>
      <div
        className={`lg:hidden fixed top-0 left-0 bg-primary   opacity-1 z-50  
    duration-100
    ease-in-out  ${
      open
        ? "translate-x-0  w-[350px] h-[100vh]"
        : "-translate-x-full opacity-0 w-0 "
    }`}
      >
        <div className="container p-10">
          <h1
            className="mb-5
                  font-Anton
                  text-[24px]
                  tracking-wider
                  text-white font-extrabold"
          >
            CHICKEN
            <span className="text-black">STEAK</span>
          </h1>
          <nav className="flex flex-col gap-10  ">
            <NavLinks color="text-white" hoverColor="hover:text-white/50" />
          </nav>

          <Button
            className="flex items-center gap-2
                text-[12px]
                uppercase
                bg-black
                border-2
                  border-primary/70
               text-white
                px-[32px]
                py-[16px]
                rounded
                font-medium
                mt-5
              "
          >
            <FaRegUser className="text-white" />
            devenir partenaire
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
