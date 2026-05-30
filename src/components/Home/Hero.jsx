import { motion } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import burgerImg from "../../assets/images/burger2.webp";
import smokeTexture from "../../assets/textures/smoke.png";
import noiseTexture from "../../assets/textures/noiseTexture.png";
import bgTexture from "../../assets/textures/bg-texture.png";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="relative  h-[90vh] sm:min-h-screen overflow-hidden bg-black  py-[60px]">
      {/* ================= BACKGROUND TEXTURE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          loading="lazy"
          src={bgTexture}
          alt=""
          className="
            w-full
            h-full
            object-cover
            opacity-10
          "
        />
      </div>

      {/* ================= DARK OVERLAY ================= */}
      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-gradient-to-r
          from-black
          via-black/95
          to-black/50
        "
      />

      {/* ================= SMOKE EFFECT ================= */}
      <div
        className="
          absolute
          inset-0
          z-[2]
          opacity-[0.8]
          mix-blend-screen
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `url(${smokeTexture})`,
        }}
      />

      {/* ================= ORANGE GLOW ================= */}
      <div
        className="
          absolute
          right-[-10%]
          top-1/2
          -translate-y-1/2
          w-[750px]
          h-[750px]
          rounded-full
          bg-primary/20
          blur-[150px]
          z-[2]
        "
      />

      {/* ================= PARTICLES / NOISE ================= */}
      <div
        className="
          absolute
          inset-0
          z-[2]
         opacity-[0.5]
          bg-repeat
        "
        style={{
          backgroundImage: `url(${noiseTexture})`,
        }}
      />

      {/* ================= HERO CONTENT ================= */}
      <div className="container relative z-10 min-h-[calc(100vh-90px)]  flex items-center ">
        <div className="grid lg:grid-cols-2 gap-[60px] items-center w-full">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-[28px]"
          >
            {/* PREMIUM BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                border
                border-primary/20
                bg-primary/10
                backdrop-blur-md
                rounded-full
                px-5
                py-2
                w-fit
              "
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>

              <span
                className="
                 
                  text-primary
                  uppercase
                  tracking-[3px]
                  text-[12px]
                  font-semibold
                  font-Raleway
            
                "
              >
                Premium Fast Food
              </span>
            </div>

            {/* TITLE */}
            <div className="flex flex-col">
              <h1
                className="
                
                  text-[56px]
                  sm:text-[120px]
                  font-extrabold
                  uppercase
                  text-white
                  font-BebasNeue
                  leading-[0.85]
                  tracking-tight
                "
              >
                CHICKEN
                <span className="block text-primary">STEAK</span>
              </h1>

              {/* SUBTITLE */}
              <p
                className="
                  mt-6
                  text-white
                  text-[18px]
                  sm:text-[32px]
                  uppercase
                  font-semibold
                  font-Raleway
                  leading-tight
                "
              >
                L'avenir du fast-food
                <span className="text-primary"> premium</span>
              </p>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                text-white/70
                w-[80%]
                sm:w-full
                text-[14px]
                sm:text-[16px]
                font-Raleway
                font-normal
                leading-[1.9]
                max-w-[560px]
              "
            >
              Une expérience unique qui réinvente le goût avec des ingrédients
              de qualité et un savoir-faire exceptionnel.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-[24px] mt-2">
              {/* BTN PRIMARY */}
              <Button
                className="flex items-center gap-2
                  btn
                  btn-primary
                  px-8
                  py-4
                  rounded-xl
                  uppercase
                  tracking-wide
                  font-semibold
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(255,122,0,0.45)]
                  transition-all
                  duration-200
                "
              >
                Découvrir Le Concept
              </Button>

              {/* BTN SECONDARY */}

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
                <CgMenuGridR className="text-[20px]" />
                VOIR LE MENU
              </Button>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
              relative
              flex
              justify-center
              items-center
            "
          >
            {/* IMAGE GLOW */}
            <div
              className="
                absolute
                inset-0
                bg-primary/25
                blur-[120px]
                scale-110
                rounded-full
              "
            />

            {/* BURGER IMAGE */}
            <img
              loading="lazy"
              src={burgerImg}
              alt="Chicken Steak Burger"
              className="
                relative
                z-10
                w-full
                hidden
                sm:flex
                max-w-[760px]
                object-contain
                drop-shadow-[0_0_90px_rgba(255,122,0,0.35)]
              "
            />
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[180px]
          bg-gradient-to-t
          from-black
          to-transparent
          z-[5]
        "
      />
    </section>
  );
}

export default Hero;
