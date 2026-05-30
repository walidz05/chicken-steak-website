import NavLinks from "./NavLinks";
import { FaRegUser } from "react-icons/fa";
import Button from "../ui/Button";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = ({ open, setOpen }) => {
  return (
    <header
      className="
                  fixed
                    top-0
                    left-0
                    w-full
                    z-50
                    border-b
                    border-white/10
                    backdrop-blur-md
                    bg-black/30
                  "
    >
      <div className="container h-[90px] flex items-center   justify-between ">
        <h1
          className="
                  font-BebasNeue
                  text-[24px]
                  tracking-wider
                  text-white font-bold"
        >
          CHICKEN
          <span className="text-primary font-BebasNeue">STEAK</span>
        </h1>
        <nav className="hidden lg:flex items-center gap-10">
          <NavLinks color="text-white" />
        </nav>

        <Button
          className="hidden lg:flex items-center gap-2
                text-[12px]
                uppercase
                border-2
              border-primary/70
              text-white
              px-[32px]
              py-[16px]
              rounded
              font-medium
              hover:scale-105
              transition-all
              duration-300
              "
        >
          <FaRegUser className="text-white" />
          devenir partenaire
        </Button>

        {open ? (
          <IoCloseOutline
            onClick={() => setOpen(!open)}
            className="flex sm:hidden cursor-pointer"
            color="white"
          />
        ) : (
          <CiMenuFries
            onClick={() => setOpen(!open)}
            className="flex sm:hidden cursor-pointer"
            color="white"
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
