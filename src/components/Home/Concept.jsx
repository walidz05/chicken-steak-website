import Heading from "../ui/Heading";
import imgConcept from "../../assets/images/img-concept.webp";
import { GiChickenOven } from "react-icons/gi";
import { PiHamburgerFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import Button from "../ui/Button";
function Concept() {
  return (
    <div className="py-[60px]  border-b border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[40px] sm:gap-[24px]">
          <div className="">
            <img src={imgConcept} alt="" className="w-full" />
          </div>
          <div className="flex flex-col gap-3 items-baseline">
            <Heading
              children1="notre histoire"
              children2={
                <>
                  plus qu'un burger, une{" "}
                  <span className="font-normal text-primary">expérience</span>
                </>
              }
            />
            <p className="font-Raleway font-normal text-[14px] text-white/80 leading-[1.7]">
              Chicken Steak est né d’une passion pour le goût authentique et
              l’envie de créer une expérience fast-food différente. Nous
              sélectionnons les meilleurs ingrédients pour offrir des recettes
              uniques, généreuses et inoubliables.
            </p>
            <Button
              className="
                  btn
                  btn-secondary
                  flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  hover:border-primary
                  hover:bg-primary/10
                  hover:text-white
                  transition-all
                  duration-200
                "
            >
              en savoir plus
            </Button>
          </div>
          <div className=" flex flex-col gap-[36px]   sm:pl-10 sm:border-l border-white/10">
            <div className="flex items-center gap-5">
              <div className="w-[60px] h-[60px] bg-primary rounded-full text-center flex items-center justify-center">
                <GiChickenOven className="text-white" size="36px" />
              </div>

              <div>
                <p className="text-primary font-Raleway font-bold text-[36px]">
                  100%
                </p>
                <p className="text-white/80 font-medium text-[14px] capitalize">
                  Poulet halal de qualité
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[60px] h-[60px] bg-primary rounded-full text-center flex items-center justify-center">
                <PiHamburgerFill className="text-white" size="36px" />
              </div>

              <div>
                <p className="text-primary font-bold font-Raleway text-[36px]">
                  +50
                </p>
                <p className="text-white/80 font-medium text-[14px] capitalize">
                  Recette uniques
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[60px] h-[60px] bg-primary rounded-full text-center flex items-center justify-center">
                <FaUsers className="text-white" size="36px" />
              </div>

              <div>
                <p className="text-primary font-bold font-Raleway text-[36px]">
                  10k
                </p>
                <p className="text-white/80 font-medium text-[14px] capitalize">
                  Clients satisfaits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Concept;
