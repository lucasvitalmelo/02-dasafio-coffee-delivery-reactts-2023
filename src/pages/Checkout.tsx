import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { FormDelivery } from "../components/FormDelivery";

import { Item } from "../components/Item";
import { Payment } from "../components/Payment";

export function Checkout() {
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

          <Item />
          <Item />

          <div className="flex w-full justify-between mt-6">
            <div className="flex flex-col items-start gap-3">
              <p className="font-roboto text-sm text-base-text">Total de itens</p>
              <p className="font-roboto text-sm text-base-text">Entrega</p>
              <p className="font-roboto font-bold text-xl text-base-subtitle">Total</p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <p className="font-roboto text-sm text-base-text">R$ 29,70</p>
              <p className="font-roboto text-sm text-base-text">R$ 3,50</p>
              <p className="font-roboto font-bold text-xl text-base-subtitle">R$ 33,20</p>
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