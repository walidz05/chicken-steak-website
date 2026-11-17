import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
export default function InquiryForm({ franchise = false }) {
  const [status, setStatus] = useState("idle");
  const name = franchise ? "franchise" : "contact";
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(new FormData(form)).toString() });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch { setStatus("error"); }
  }
  return <form name={name} method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} className="inquiry-form rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
    <input type="hidden" name="form-name" value={name} />
    <p hidden><label>Ne pas remplir<input name="bot-field" tabIndex="-1" autoComplete="off" /></label></p>
    <h2 className="font-BebasNeue text-3xl text-white mb-6">{franchise ? "Parlons de votre projet" : "Écrivez-nous"}</h2>
    <div className="grid sm:grid-cols-2 gap-5">
      <label>Nom complet <span aria-hidden="true">*</span><input name="name" autoComplete="name" required maxLength="120" /></label>
      <label>Adresse e-mail <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required maxLength="254" /></label>
      <label>Téléphone{franchise && " *"}<input name="phone" type="tel" autoComplete="tel" required={franchise} maxLength="40" /></label>
      {franchise ? <label>Ville envisagée *<input name="city" autoComplete="address-level2" required maxLength="120" /></label> : <label>Votre demande *<select name="topic" required defaultValue=""><option value="" disabled>Choisir un sujet</option><option>Informations sur le menu</option><option>Allergènes et ingrédients</option><option>Une visite chez nous</option><option>Autre demande</option></select></label>}
    </div>
    <label className="block mt-5">{franchise ? "Présentez votre projet" : "Votre message"} *<textarea name="message" rows="6" required minLength="10" maxLength="5000" /></label>
    <label className="flex gap-3 items-start mt-5"><input type="checkbox" name="consent" required className="mt-1" /><span>J’accepte que mes informations soient utilisées pour répondre à ma demande. <Link to="/confidentialite" className="text-primary underline">Politique de confidentialité</Link></span></label>
    <p className="text-xs text-white/50 mt-4">* Champs obligatoires.</p>
    <Button type="submit" disabled={status === "sending"} className="btn-primary mt-6 disabled:opacity-50">{status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}</Button>
    <div aria-live="polite" aria-atomic="true">
      {status === "success" && <p role="status" className="text-white mt-5">Merci ! Votre demande a bien été envoyée. Notre équipe reviendra vers vous par e-mail.</p>}
      {status === "error" && <p role="alert" className="text-primary mt-5">L’envoi n’a pas abouti. Vos informations sont conservées dans le formulaire : réessayez ou écrivez à contact@chickensteak.ma.</p>}
    </div>
  </form>;
}
