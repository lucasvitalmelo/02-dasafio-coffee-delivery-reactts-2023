import { useContext, useEffect, useState } from "react";
import { FormDelivery } from "../components/FormDelivery";

import {CoffeeUnit } from "../components/CoffeeUnit";
import { Payment } from "../components/Payment";
import { CartContext } from "../context/CartContext";
import { priceFormatter } from "../utils/formatter";

interface coffeeOnCart {
  name: string
  description: string,
  src: string
  tags: string[],
  price: number
  count: number
  priceTotal: number
}

interface coffee {
  name: string,
  description: string,
  src: string,
  price: number,
  tags: string[],
}

export function Checkout() {
  const { cart, addToCart, removeToCart } = useContext(CartContext)

  const SumOfEachTypeOfCoffee = Object.values(
    cart.reduce((acc: Array<coffeeOnCart>, coffee: coffee) => {
      // @ts-ignore
      const coffeeName = acc[coffee.name]

      if (!acc[coffeeName]) {
        acc[coffeeName] = {
          name: coffee.name,
          description: coffee.description,
          src: coffee.src,
          price: coffee.price,
          tags: coffee.tags,
          count: 0,
          priceTotal: 0
        };
      }
      acc[coffeeName].count++;
      acc[coffeeName].priceTotal += coffee.price;
      return acc;
    }, [])
  );
  console.log(SumOfEachTypeOfCoffee)
  const SumTotalPrice =
    SumOfEachTypeOfCoffee.reduce((acc, coffee) => {
      acc += coffee.priceTotal
      return acc
    }, 0)


  function handleAddCoffee(coffee: coffee) {
    addToCart(
      {
        name: coffee.name,
        description: coffee.description,
        price: coffee.price,
        src: coffee.src,
        tags: coffee.tags
      }
    )
  }


  return (
    <div className="flex justify-between px-40 gap-8 mx-auto max-w-[1440px]">
      <div>
        <p className="font-baloo text-lg ">Complete seu pedido</p>
        <FormDelivery />
        <Payment />
      </div>

      <section>
        <p className="font-baloo text-lg ">Cafés selecionados</p>
        <div className=" flex flex-col   bg-base-card w-[448px]  justify-between 
        rounded-tl-md rounded-tr-[44px] rounded-bl-[44px] rounded-br-md p-10 gap">
          {SumOfEachTypeOfCoffee.map(coffee => {
            const formattedPrice = priceFormatter.format(coffee.priceTotal)

            return (
              <CoffeeUnit
                key={`${coffee.src}--${coffee.name}`}
                img={coffee.src}
                count={coffee.count}
                price={formattedPrice}
                title={coffee.name}
                handleAddCoffee={() => handleAddCoffee(coffee)}
                handleRemoveCoffee={() => removeToCart(coffee.name)}
              />
            )
          })}

          <div className="flex w-full justify-between mt-6">
            <div className="flex flex-col items-start gap-3">
              <p className="font-roboto text-sm text-base-text">Total de itens</p>
              <p className="font-roboto text-sm text-base-text">Entrega</p>
              <p className="font-roboto font-bold text-xl text-base-subtitle">Total</p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <p className="font-roboto text-sm text-base-text">{priceFormatter.format(SumTotalPrice)}</p>
              <p className="font-roboto text-sm text-base-text">R$ 3,50</p>
              <p className="font-roboto font-bold text-xl text-base-subtitle">{priceFormatter.format(SumTotalPrice + 3.50)}</p>
            </div>
          </div>
          <button
            className="bg-brand-yellow rounded-md py-3 font-roboto font-bold  text-base-white text-sm uppercase mt-6"
          >
            confirmar pedido
          </button>
        </div>
      </section>
    </div>)
}