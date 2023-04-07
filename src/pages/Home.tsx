import { Headline } from "../components/Headline";
import { Coffee } from "../components/Coffee";
import { coffees } from "../services/coffees";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export function Home() {
  const { addCoffeToCart } = useContext(CartContext)


  return (
    <>
      <Headline />
      <div className="w-[1120px] mx-auto">
        <h3 className="font-baloo font-extrabold text-[32px] text-base-subtitle leading-[130%] mb-[54px]">
          Nossos cafés
        </h3>
        <div className="flex gap-8 flex-wrap">
          {coffees.map((coffee, index) => (
            <Coffee
              key={coffee.name}


              {...coffee}
            />
          ))}
        </div>
      </div>
    </>
  );
}
