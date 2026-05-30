import Heading from "../ui/Heading";
import imgFranchise from "../../assets/images/franchise.webp";
import bg from "../../assets/textures/smoke.png";
import Button from "../ui/Button";
function Franchise() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="py-[60px]">
        <div className="container">
          <div className="sm:flex justify-between items-center gap-[24px]">
            <div className="flex flex-col gap-2 items-baseline">
              <Heading
                children1="FUTURE FRANCHISE"
                children2={
                  <>
                    REJOIGNEZ UNE MARQUE <br /> EN PLEINE{" "}
                    <span className="text-primary ml-2">EXPANSION</span>
                  </>
                }
              />

              <p className="font-Raleway text-[14px] text-white/60">
                Chicken Steak est en pleine expansion et recherche des
                partenaires ambitieux pour ouvrir de nouveaux restaurants dans
                des emplacements stratégiques : centres commerciaux, complexes
                et zones à fort potentiel.
              </p>
              <Button
                className="flex items-center gap-2
                text-[12px]
                uppercase
                bg-primary
                border-2
                  border-primary/70
               text-white
                px-[32px]
                py-[16px]
                rounded
                font-bold
                mt-5
              "
              >
                DEVENIR PARTENIRE
              </Button>
            </div>
            <div>
              <img className="w-full" src={imgFranchise} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Franchise;
