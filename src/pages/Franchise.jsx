import PageIntro from "../components/pages/PageIntro";
import Heading from "../components/ui/Heading";
import InquiryForm from "../components/pages/InquiryForm";
import image from "../assets/images/franchise.webp";
export default function Franchise() {
  return <>
    <PageIntro eyebrow="Franchise" title="Partageons la même" accent="ambition" description="Vous souhaitez entreprendre dans la restauration ? Rejoignez l’aventure Chicken Steak et parlons ensemble de votre futur restaurant." />
    <section className="container page-section grid md:grid-cols-2 gap-10 items-center">
      <div><Heading children1="devenir partenaire" children2={<>Une marque en pleine <span className="text-primary">expansion</span></>} /><p className="page-copy mt-6">Chicken Steak recherche des partenaires ambitieux pour développer son concept de fast-food premium dans des emplacements stratégiques : centres commerciaux, complexes et zones à fort potentiel.</p><p className="page-copy mt-4">Vous partagez notre passion du goût, de la qualité et de l’accueil ? Présentez-nous votre ville, votre expérience et votre vision. Ce premier échange permet d’étudier votre projet et d’identifier les prochaines étapes ensemble.</p></div>
      <img src={image} alt="L’univers du restaurant Chicken Steak" className="w-full rounded-xl" />
    </section>
    <section className="border-y border-white/10 bg-white/[0.02]"><div className="container page-section"><Heading children1="votre parcours" children2={<>D’une idée à un <span className="text-primary">projet commun</span></>} /><ol className="grid md:grid-cols-3 gap-8 mt-10">{[["Faisons connaissance", "Présentez votre parcours, la ville envisagée et vos motivations."], ["Étudions votre projet", "Échangeons sur l’emplacement, le concept et les conditions du partenariat."], ["Construisons la suite", "Définissons ensemble les étapes adaptées à votre projet de restaurant."]].map(([title, text], index) => <li key={title} className="border-l border-primary/40 pl-6"><span className="font-BebasNeue text-4xl text-primary">0{index + 1}</span><h3 className="font-BebasNeue text-2xl text-white my-3">{title}</h3><p className="page-copy">{text}</p></li>)}</ol></div></section>
    <section className="container page-section max-w-4xl"><InquiryForm franchise /></section>
  </>;
}
