// Footer.jsx

import { memo } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./navbarData";
import { RiMailLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-dark text-white px-6 md:px-16 py-[30px] container">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12">
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
            {navLinks.map((item) => (
              <li key={item.path} className="hover:text-orange-500 transition duration-300"><Link to={item.path}>{item.title}</Link></li>
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
              <RiMailLine className="text-orange-500 text-lg" />
              <a className="break-all hover:text-orange-500" href="mailto:contact@chickensteak.ma">contact@chickensteak.ma</a>
            </div>

            <div className="flex items-center gap-3">
              <RiMapPinLine className="text-orange-500 text-lg" />
              <span>Casablanca, Maroc</span>
            </div>
          </div>

        </div>

        {/* Right */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="uppercase font-semibold text-sm mb-5 tracking-wider">
              Restez Connecté
            </h3>

            <p className="text-gray-400 text-sm leading-7 max-w-[250px]">
              Une question sur nos recettes ou un projet de partenariat ?
              Échangez avec notre équipe via la page Contact.
            </p>
          </div>

          <div className="flex gap-6 text-xs text-gray-500 mt-10">
            <Link
              to="/mentions-legales"
              className="hover:text-orange-500 transition duration-300"
            >
              Mentions légales
            </Link>

            <Link
              to="/confidentialite"
              className="hover:text-orange-500 transition duration-300"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
