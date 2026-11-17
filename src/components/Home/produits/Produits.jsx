import Heading from "../../ui/Heading";
import { dtProduits } from "../../../data/produits";

import Card from "./Card";
function Produits() {
  return (
    <div className="container py-[60px] ">
      <Heading
        children1="nos produits"
        children2={
          <>
            des recettes qui
            <br />
            <span className="text-primary"> font la différence</span>
          </>
        }
        textAlign="center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[24px] mt-[40px]">
        {dtProduits && dtProduits.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default Produits;
