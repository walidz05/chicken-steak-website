import { useEffect } from "react";
import NavLinks from "./NavLinks";
import Button from "../ui/Button";
export default function MobileMenu({ open, setOpen }) {
  useEffect(() => {
    if (!open) return;
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", close); };
  }, [open, setOpen]);
  if (!open) return null;
  return <div className="lg:hidden fixed inset-0 z-40 pt-[90px]">
    <button className="absolute inset-0 bg-black/70" aria-label="Fermer le menu" onClick={() => setOpen(false)} />
    <div id="mobile-navigation" className="relative bg-primary w-[min(350px,100%)] h-full overflow-y-auto p-8">
      <nav aria-label="Navigation mobile" className="flex flex-col gap-7"><NavLinks color="text-white" hoverColor="hover:text-white/70" onNavigate={() => setOpen(false)} /></nav>
      <Button to="/franchise" onClick={() => setOpen(false)} className="inline-flex bg-dark text-white mt-8">Devenir partenaire</Button>
    </div>
  </div>;
}
