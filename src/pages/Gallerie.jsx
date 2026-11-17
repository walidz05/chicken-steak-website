import { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import PageIntro from "../components/pages/PageIntro";
import img1 from "../assets/images/gallerie/1.webp";
import img2 from "../assets/images/gallerie/2.webp";
import img3 from "../assets/images/gallerie/3.webp";
import img4 from "../assets/images/gallerie/4.webp";
import img5 from "../assets/images/gallerie/5.webp";
import img6 from "../assets/images/gallerie/6.webp";
import img7 from "../assets/images/gallerie/7.webp";
import img8 from "../assets/images/gallerie/8.webp";
const images = [[img1, "Chicken Burger"], [img2, "Chicken Wrap"], [img3, "Chicken Steak"], [img4, "Crispy Chicken"], [img5, "Double Burger"], [img6, "Chicken Box"], [img7, "Chicken Tacos"], [img8, "Signature Burger"]];
export default function Gallerie() {
  const [selected, setSelected] = useState(0);
  const dialog = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [isOpen]);
  function open(index) { setSelected(index); setIsOpen(true); dialog.current.showModal(); }
  function move(offset) { setSelected(index => (index + offset + images.length) % images.length); }
  return <>
    <PageIntro eyebrow="Galerie" title="Un univers" accent="unique" description="Des recettes pleines de caractère, des textures gourmandes et toute la personnalité Chicken Steak. Explorez notre univers en images." />
    <section className="container page-section">
      <p className="page-copy mb-8">Sélectionnez une photo pour la découvrir en grand.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{images.map(([src, title], index) => <button key={src} onClick={() => open(index)} aria-label={`Agrandir : ${title}`} className="group relative rounded-xl border border-primary/20 overflow-hidden text-left">
        <img src={src} alt={title} loading="lazy" className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" /><h2 className="absolute bottom-0 left-0 p-5 text-white font-BebasNeue text-2xl">{title}<span className="block w-12 h-[3px] bg-primary mt-2" /></h2>
      </button>)}</div>
    </section>
    <dialog ref={dialog} aria-label="Galerie photos" className="gallery-dialog" onClose={() => setIsOpen(false)} onClick={event => { if (event.target === event.currentTarget) dialog.current.close(); }} onKeyDown={event => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }}>
      <div className="relative p-4 sm:p-8">
        <button autoFocus onClick={() => dialog.current.close()} aria-label="Fermer la photo" className="absolute top-4 right-4 p-3 rounded-full bg-dark text-white text-2xl"><RiCloseLine /></button>
        <img src={images[selected][0]} alt={images[selected][1]} className="max-h-[70vh] w-full object-contain rounded-xl" />
        <div className="flex items-center justify-between gap-4 text-white mt-5"><button onClick={() => move(-1)} aria-label="Photo précédente" className="p-3 border border-white/20 rounded-full hover:border-primary"><RiArrowLeftLine /></button><p aria-live="polite" className="text-center font-Raleway text-sm">{images[selected][1]}<span className="block text-primary mt-1">{selected + 1} / {images.length}</span></p><button onClick={() => move(1)} aria-label="Photo suivante" className="p-3 border border-white/20 rounded-full hover:border-primary"><RiArrowRightLine /></button></div>
      </div>
    </dialog>
  </>;
}
