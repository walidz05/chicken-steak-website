// Footer.jsx

import { memo } from "react";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTiktokLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";

import { RiPhoneLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-dark text-white px-6 md:px-16 sm:py-[30px] container">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo */}
        <div>
          <h2 className="uppercase font-black leading-none">
            <span className="text-white text-4xl">Chicken</span>
            <br />
            <span className="text-orange-500 text-4xl">Steak</span>
          </h2>

          <p className="text-gray-400 text-sm leading-7 mt-5 max-w-[250px]">
            Chicken Steak, l’univers du fast-food premium.
            <br />
            Goût unique, qualité irréprochable, expérience inoubliable.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="uppercase font-semibold text-sm mb-5 tracking-wider">
            Liens Rapides
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            {[
              "Accueil",
              "À Propos",
              "Menu",
              "Franchise",
              "Galerie",
              "Contact",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-orange-500 transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="uppercase font-semibold text-sm mb-5 tracking-wider">
            Contactez-nous
          </h3>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <RiPhoneLine className="text-orange-500 text-lg" />
              <span>+212 6 00 00 00 00</span>
            </div>

            <div className="flex items-center gap-3">
              <RiMailLine className="text-orange-500 text-lg" />
              <span>contact@chickensteak.ma</span>
            </div>

            <div className="flex items-center gap-3">
              <RiMapPinLine className="text-orange-500 text-lg" />
              <span>Casablanca, Maroc</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-7">
            <a
              href="#"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
            >
              <RiInstagramLine className="text-xl" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
            >
              <RiFacebookCircleLine className="text-xl" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
            >
              <RiTiktokLine className="text-xl" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
            >
              <RiWhatsappLine className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="uppercase font-semibold text-sm mb-5 tracking-wider">
              Restez Connecté
            </h3>

            <p className="text-gray-400 text-sm leading-7 max-w-[250px]">
              Suivez-nous sur nos réseaux pour découvrir nos nouveautés et nos
              offres.
            </p>
          </div>

          <div className="flex gap-6 text-xs text-gray-500 mt-10">
            <a
              href="#"
              className="hover:text-orange-500 transition duration-300"
            >
              Mentions légales
            </a>

            <a
              href="#"
              className="hover:text-orange-500 transition duration-300"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
