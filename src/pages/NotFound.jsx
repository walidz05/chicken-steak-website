import PageIntro from "../components/pages/PageIntro";
import Button from "../components/ui/Button";
export default function NotFound() {
  return <><PageIntro eyebrow="Page introuvable · 404" title="Une petite" accent="fausse route" description="Cette page n’existe pas ou son adresse a changé. Retrouvez l’univers Chicken Steak depuis l’accueil ou découvrez nos spécialités." /><div className="container page-section flex flex-wrap gap-4"><Button to="/Accueil" className="btn-primary">Retour à l’accueil</Button><Button to="/menu" className="btn-secondary">Voir le menu</Button></div></>;
}
