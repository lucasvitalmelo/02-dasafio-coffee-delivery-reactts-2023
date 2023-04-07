import { useContext } from "react";
import { FormDelivery } from "../components/FormDelivery";

import { CoffeeUnit } from "../components/CoffeeUnit";
import { Payment } from "../components/Payment";
import { CartContext } from "../context/CartContext";
import { priceFormatter } from "../utils/formatter";
import { coffees } from "../services/coffees";

export function Checkout() {
  const { cart, addCoffeToCart, removeToCart } = useContext(CartContext)

  const totalPrice = cart.reduce((acc, coffee) => {
    acc += coffee.amount * coffees[coffee.id].price
    return acc
  }, 0 )

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
          {cart.map(coffee => {
            const { id, amount } = coffee

            const formattedPrice = priceFormatter.format(coffees[id].price * amount)
            return (
              <CoffeeUnit
                key={`${coffees[id].src}--${coffees[coffee.id].name}`}
                img={coffees[id].src}
                amount={amount}
                price={formattedPrice}
                title={coffees[id].name}
                handleAddOneCoffee={() => addCoffeToCart(id, 1)}
                handleRemoveOneCoffee={() => removeToCart(id, 1)}
                handleRemoveAllCoffee={() => removeToCart(id)}
              />
            )
          })}

          <div className="flex w-full justify-between">
            <div className="flex flex-col items-start gap-3">
              <p className="font-roboto text-sm text-base-text">Total de itens</p>
              <p className="font-roboto text-sm text-base-text">Entrega</p>
              <p className="font-roboto font-bold text-xl text-base-subtitle">Total</p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <p className="font-roboto text-sm text-base-text">{priceFormatter.format(totalPrice)}</p>
              <p className="font-roboto text-sm text-base-text">R$ 3,50</p>
              <p className="font-roboto font-bold text-xl text-base-subtitle">{priceFormatter.format(totalPrice + 3.50)}</p>
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