import { useState } from "react";
import PageIntro from "../components/pages/PageIntro";
import Button from "../components/ui/Button";
import { dtProduits } from "../data/produits";
import texture from "../assets/textures/bg-texture.webp";
const details = [
  { label: "Burgers", text: "Des pains moelleux, des garnitures généreuses et des sauces pleines de caractère. Retrouvez tout l’esprit Chicken Steak dans nos burgers.", tags: "Gourmand · Généreux · Signature" },
  { label: "Crispy chicken", text: "Une panure croustillante et un poulet tendre : une recette qui met le goût au premier plan, à savourer seul ou à partager.", tags: "Croustillant · Tendre · À partager" },
  { label: "Wraps", text: "Une tortilla garnie de poulet et de saveurs complémentaires, roulée pour une pause gourmande facile à emporter.", tags: "Savoureux · Pratique · Généreux" },
  { label: "Plats revisités", text: "Des inspirations venues d’ailleurs, réinterprétées avec la personnalité Chicken Steak pour varier les plaisirs à chaque visite.", tags: "Original · Gourmand · Inspiré" },
];
export default function Menu() {
  const [category, setCategory] = useState(0);
  return <>
    <PageIntro eyebrow="Notre menu" title="Des recettes qui font" accent="la différence" description="Burgers, crispy chicken, wraps et plats revisités : explorez nos spécialités et trouvez votre prochaine envie gourmande." />
    <section className="container page-section">
      <div role="group" aria-label="Filtrer les spécialités" className="flex flex-wrap justify-center gap-3 mb-10">
        {["Tout le menu", ...details.map(item => item.label)].map((label, index) => <button key={label} aria-pressed={category === index} onClick={() => setCategory(index)} className={`btn border rounded-xl ${category === index ? "bg-primary border-primary text-white" : "bg-white/5 border-white/10 text-white/70 hover:border-primary"}`}>{label}</button>)}
      </div>
      <div aria-live="polite" className="grid md:grid-cols-2 gap-6">
        {dtProduits.filter(item => !category || item.id === category).map(item => <article key={item.id} className="rounded-xl border-2 border-primary/20 overflow-hidden" style={{ backgroundImage: `url(${texture})` }}>
          <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div className="p-6 sm:p-8"><p className="text-primary text-xs tracking-widest uppercase mb-3">{details[item.id - 1].tags}</p><h2 className="font-BebasNeue text-3xl text-white">{item.title}</h2><p className="page-copy mt-3">{details[item.id - 1].text}</p></div>
        </article>)}
      </div>
      <aside className="mt-10 p-6 sm:p-8 rounded-xl border border-white/10 bg-white/5 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div><h2 className="font-BebasNeue text-2xl text-white">Une question avant de choisir ?</h2><p className="page-copy mt-2">Contactez-nous pour connaître les disponibilités, les tarifs et les informations sur les allergènes.</p></div>
        <Button to="/contact" className="btn-primary shrink-0">Nous contacter</Button>
      </aside>
    </section>
  </>;
}
