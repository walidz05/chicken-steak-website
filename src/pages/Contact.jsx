import { RiMailLine, RiMapPinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PageIntro from "../components/pages/PageIntro";
import Heading from "../components/ui/Heading";
import InquiryForm from "../components/pages/InquiryForm";
export default function Contact() {
  return <>
    <PageIntro eyebrow="Contact" title="Une question ?" accent="Parlons-en" description="Une envie gourmande, une question sur nos recettes ou un projet à partager : l’équipe Chicken Steak est à votre écoute." />
    <section className="container page-section grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
      <div><Heading children1="restons en contact" children2={<>À votre <span className="text-primary">écoute</span></>} /><p className="page-copy mt-6">Utilisez le formulaire pour nous écrire. Pour une question sur les ingrédients ou les allergènes, précisez la recette concernée afin que nous puissions vous renseigner.</p>
        <a href="mailto:contact@chickensteak.ma" className="flex items-center gap-4 text-white text-sm mt-8 break-all hover:text-primary"><RiMailLine className="text-primary shrink-0 text-2xl" />contact@chickensteak.ma</a>
        <p className="flex items-center gap-4 text-white/70 text-sm mt-6"><RiMapPinLine className="text-primary text-2xl" />Casablanca, Maroc</p>
        <div className="border-t border-white/10 mt-8 pt-8"><h2 className="font-BebasNeue text-2xl text-white">Vous souhaitez devenir partenaire ?</h2><p className="page-copy mt-3">Un formulaire dédié vous permet de présenter votre projet de franchise.</p><Link to="/franchise" className="inline-block text-primary text-sm mt-4 underline">Découvrir la franchise</Link></div>
      </div>
      <InquiryForm />
    </section>
    <section className="container pb-[60px]"><Heading children1="besoin d’un renseignement ?" children2={<>Vos questions <span className="text-primary">fréquentes</span></>} /><div className="mt-8">{[["Où consulter les spécialités Chicken Steak ?", <>Retrouvez nos familles de recettes sur la <Link className="text-primary underline" to="/menu">page Menu</Link>. Pour les tarifs et les disponibilités, contactez notre équipe.</>], ["Comment obtenir les informations sur les allergènes ?", "Indiquez le produit qui vous intéresse dans votre message. En cas d’allergie, demandez toujours confirmation à l’équipe du restaurant avant de commander."], ["Comment proposer un projet de franchise ?", <>Rendez-vous sur la <Link className="text-primary underline" to="/franchise">page Franchise</Link> et complétez le formulaire avec votre ville et une présentation de votre projet.</>]].map(([title, content]) => <details key={title} className="border-b border-white/10 py-5"><summary className="text-white font-Raleway font-semibold text-sm cursor-pointer">{title}</summary><p className="page-copy mt-4 max-w-3xl">{content}</p></details>)}</div></section>
  </>;
}
