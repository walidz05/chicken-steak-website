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
          className="
          hidden
                  btn
                  btn-secondary
                  sm:flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-primary
                  bg-dark
                  backdrop-blur-[80px]
                  hover:border-primary
                  hover:bg-primary/10
                  hover:text-white
                  transition-all
                  duration-200
                  uppercase
                  hover:shadow-[0_0_40px_rgba(255,122,0,0.45)]

                "
        >
          <FaRegUser className="text-[16px]" />
          DEVENIR PaRTENaIRE
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
