import { Link } from "react-router-dom";
import smoke from "../../assets/textures/smoke.webp";
export default function PageIntro({ eyebrow, title, accent, description }) {
  return <section className="page-intro relative border-b border-white/10 overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${smoke})` }} />
    <div className="container relative">
      <nav aria-label="Fil d’Ariane" className="text-xs text-white/50 mb-8"><Link to="/Accueil" className="hover:text-primary">Accueil</Link><span className="mx-3" aria-hidden="true">/</span><span className="text-primary">{eyebrow}</span></nav>
      <p className="font-pacifico text-primary text-base mb-4">{eyebrow}</p>
      <h1 className="font-BebasNeue text-5xl sm:text-7xl uppercase leading-none text-white">{title} <span className="text-primary">{accent}</span></h1>
      <p className="font-Raleway text-sm sm:text-base leading-8 text-white/70 max-w-2xl mt-6">{description}</p>
    </div>
  </section>;
}
