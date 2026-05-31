import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
function Router() {
  return (
    <>
      <Routes>
        <Route path="/Accueil" element={<Home />} />
      </Routes>
    </>
  );
}

export default Router;
