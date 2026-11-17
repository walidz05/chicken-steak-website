import PageIntro from "../components/pages/PageIntro";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import image from "../assets/images/img-concept.webp";
export default function About() {
  return <>
    <PageIntro eyebrow="À propos" title="Plus qu’un burger," accent="une expérience" description="Le goût authentique, des recettes généreuses et le plaisir de se retrouver : bienvenue dans l’univers Chicken Steak." />
    <section className="container page-section grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
      <img src={image} alt="L’univers gourmand de Chicken Steak" className="w-full rounded-xl" />
      <div className="space-y-6">
        <Heading children1="notre histoire" children2={<>La passion du <span className="text-primary">goût</span></>} />
        <p className="page-copy">Chicken Steak est né d’une passion pour le goût authentique et de l’envie de créer une expérience fast-food différente. Notre ambition : faire de chaque repas un moment gourmand, avec des ingrédients de qualité et des associations qui font la différence.</p>
        <p className="page-copy">Du poulet croustillant aux burgers généreux, en passant par nos wraps et nos plats revisités, chaque famille de recettes exprime le même engagement : du caractère, de la générosité et le plaisir de bien manger.</p>
        <Button to="/menu" className="btn-primary inline-flex rounded-xl">Découvrir notre menu</Button>
      </div>
    </section>
    <WhyChooseUs />
    <section className="container page-section text-center">
      <Heading textAlign="center" children1="un moment à partager" children2={<>Entrez dans <span className="text-primary">notre univers</span></>} />
      <p className="page-copy max-w-2xl mx-auto my-6">Un déjeuner entre collègues, une pause gourmande ou un repas entre amis : découvrez les saveurs et l’esprit Chicken Steak en images.</p>
      <Button to="/galerie" className="btn-secondary inline-flex rounded-xl">Explorer la galerie</Button>
    </section>
  </>;
}
