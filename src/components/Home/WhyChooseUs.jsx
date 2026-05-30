import Heading from "../../components/ui/Heading";
import bgTexture from "../../assets/textures/fireBg.webp";
import { whychoseDt } from "../../data/whychose";
function WhyChooseUs() {
  return (
    <div
      className="py-[60px] border-t-2 border-b-2 border-white/10"
      style={{
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Heading
        textAlign="center"
        children1="Pourquoi Chicken Steak ?"
        children2={
          <>
            UNE EXPÉRIENCE PENSÉE POUR
            <span className="text-primary ml-2">VOUS</span>
          </>
        }
      />

      <div className="container grid grid-cols-1 sm:grid-cols-4 gap-[20px] sm:gap-[24px] mt-[40px]">
        {whychoseDt &&
          whychoseDt.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex
    flex-col
    items-center
    text-center
min-h-[150px]
    
    sm:min-h-[220px]
    px-6

    sm:border-r
    border-white/10
    last:border-r-0"
              >
                <div className="border-2 border-primary/60 rounded-full w-[60px] h-[60px] flex items-center justify-center m-auto">
                  <Icon className="text-primary  text-[36px] " />
                </div>

                <p
                  className="  font-bold
    font-Anton
    uppercase
    text-white
    min-h-[56px]
    flex
    items-center
    justify-center"
                >
                  {item.title}
                </p>
                <p
                  className=" font-medium
    text-[14px]
    font-Raleway
    text-white/80
    sm:max-w-[220px]
    sm:min-h-[70px]
    flex
    items-start
    justify-center
    mx-auto"
                >
                  {item.description}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WhyChooseUs;
