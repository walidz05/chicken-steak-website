import Heading from "../ui/Heading";
import Button from "../ui/Button";

import img1 from "../../assets/images/gallerie/1.webp";
import img2 from "../../assets/images/gallerie/2.webp";
import img3 from "../../assets/images/gallerie/3.webp";
import img4 from "../../assets/images/gallerie/4.webp";
import img5 from "../../assets/images/gallerie/5.webp";
import img6 from "../../assets/images/gallerie/6.webp";
import img7 from "../../assets/images/gallerie/7.webp";
import img8 from "../../assets/images/gallerie/8.webp";

const galleryItems = [
  { id: 1, image: img1, title: "Chicken Burger" },
  { id: 2, image: img2, title: "Chicken Wrap" },
  { id: 3, image: img3, title: "Chicken Steak" },
  { id: 4, image: img4, title: "Crispy Chicken" },
  { id: 5, image: img5, title: "Double Burger" },
  { id: 6, image: img6, title: "Chicken Box" },
  { id: 7, image: img7, title: "Chicken Tacos" },
  { id: 8, image: img8, title: "Signature Burger" },
];

function Gallerie() {
  return (
    <section className="py-[60px] border-b border-white/10">
      <Heading
        textAlign="center"
        children1="gallerie"
        children2={
          <>
            un univers <span className="text-primary">unique</span>
          </>
        }
      />

      <div className="mt-[60px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-primary/20
                cursor-pointer
              "
            >
              {/* IMAGE */}
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-[300px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* DARK OVERLAY */}
              <div
                className="
                  absolute
                  inset-0       
                  group-hover:bg-black/50
                  transition-all
                  duration-500
                "
              />

              {/* FIRE GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700

                  bg-[radial-gradient(circle_at_bottom,rgba(255,122,0,0.7),transparent_65%)]
                "
              />

              {/* ORANGE BORDER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500

                  shadow-[inset_0_0_40px_rgba(255,122,0,0.4)]
                "
              />

              {/* TITLE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-5

                  translate-y-full
                  opacity-0

                  group-hover:translate-y-0
                  group-hover:opacity-100

                  transition-all
                  duration-500
                "
              >
                <h3
                  className="
                    text-white
                    text-[28px]
                    font-BebasNeue
                    uppercase
                    tracking-wide
                  "
                >
                  {item.title}
                </h3>

                <div className="w-[50px] h-[3px] bg-primary mt-2 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-8">
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
                  hover:shadow-[0_0_40px_rgba(255,122,0,0.45)]
                  transition-all
                  duration-200
                "
          >
            voir toute la gallerie
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Gallerie;
