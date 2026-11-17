import { useState } from "react";
import "./App.css";
import MobileMenu from "./components/layout/MobileMenu";
import Navbar from "./components/layout/Navbar";
import Router from "./routes/Router";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu</a>
      <ScrollToTop />
      <Navbar open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <main id="main-content" className="py-[60px]">
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
