import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Menu = lazy(() => import("../pages/Menu"));
const Franchise = lazy(() => import("../pages/Franchise"));
const Gallerie = lazy(() => import("../pages/Gallerie"));
const Contact = lazy(() => import("../pages/Contact"));
const Legal = lazy(() => import("../pages/Legal"));
const NotFound = lazy(() => import("../pages/NotFound"));
const titles = { "/": "Accueil", "/accueil": "Accueil", "/about": "À propos", "/menu": "Menu", "/franchise": "Franchise", "/galerie": "Galerie", "/contact": "Contact", "/mentions-legales": "Mentions légales", "/confidentialite": "Confidentialité" };
export default function Router() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = `${titles[pathname.toLowerCase()] || "Page introuvable"} | Chicken Steak`;
  }, [pathname]);
  return <Suspense fallback={<div role="status" className="container py-24 text-white font-Raleway">Chargement de la page…</div>}><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Accueil" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/franchise" element={<Franchise />} />
    <Route path="/galerie" element={<Gallerie />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/mentions-legales" element={<Legal />} />
    <Route path="/confidentialite" element={<Legal privacy />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Suspense>;
}
