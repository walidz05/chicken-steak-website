import PageIntro from "../components/pages/PageIntro";
export default function Legal({ privacy = false }) {
  return <>
    <PageIntro eyebrow={privacy ? "Confidentialité" : "Mentions légales"} title={privacy ? "Vos données," : "Informations"} accent={privacy ? "en confiance" : "sur le site"} description={privacy ? "Les informations utiles pour comprendre le traitement de vos demandes sur ce site." : "Les informations relatives au site Chicken Steak et à son utilisation."} />
    <article className="container page-section legal-copy max-w-4xl">
      {privacy ? <>
        <h2>Données transmises</h2><p>Les formulaires recueillent votre nom, votre adresse e-mail, votre message et, si vous les renseignez, votre numéro de téléphone et le sujet de votre demande. Pour une demande de franchise, votre téléphone et la ville envisagée sont également demandés.</p>
        <h2>Utilisation de vos informations</h2><p>Ces informations permettent à l’équipe Chicken Steak de répondre à votre demande et d’échanger avec vous sur votre projet. Votre accord est demandé avant l’envoi du formulaire. Évitez de communiquer des données sensibles dans votre message.</p>
        <h2>Traitement des formulaires</h2><p>Les formulaires sont traités et stockés par Netlify Forms, le service de formulaires de notre hébergeur. Un dispositif de filtrage protège les envois contre les messages indésirables. Les données peuvent être traitées hors du Maroc dans le cadre de ce service.</p>
        <h2>Vos demandes concernant vos données</h2><p>Pour demander l’accès, la correction ou la suppression des informations que vous avez transmises, ou pour retirer votre accord, écrivez à <a href="mailto:contact@chickensteak.ma">contact@chickensteak.ma</a> en précisant l’adresse e-mail utilisée lors de votre demande.</p>
        <h2>Stockage dans votre navigateur</h2><p>Le site n’utilise pas de compte utilisateur ni de panier. Les préférences de filtre du menu et de navigation dans la galerie restent limitées à la page ouverte.</p>
      </> : <>
        <h2>Le site Chicken Steak</h2><p>Ce site présente l’univers Chicken Steak, ses familles de produits et son offre de partenariat. Pour toute question relative au contenu du site, contactez <a href="mailto:contact@chickensteak.ma">contact@chickensteak.ma</a>. Localisation indiquée : Casablanca, Maroc.</p>
        <h2>Hébergement</h2><p>Le site est hébergé par Netlify. Pour en savoir plus sur l’hébergeur : <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">www.netlify.com</a>.</p>
        <h2>Produits et informations</h2><p>Les photographies présentent l’univers et les spécialités de la marque. La disponibilité, la composition et les tarifs des produits sont à confirmer auprès de l’équipe avant toute commande. Pour toute question sur les allergènes, demandez confirmation au restaurant.</p>
        <h2>Contenu du site</h2><p>Le nom Chicken Steak et les contenus visuels et rédactionnels de ce site sont présentés pour faire découvrir la marque. Pour toute demande de réutilisation, contactez notre équipe.</p>
      </>}
    </article>
  </>;
}
