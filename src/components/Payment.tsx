import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

export function Payment(){
  return (
    <div className="flex flex-col bg-base-card w-[640px] rounded-md p-10 mt-3 gap-8" >
          <div className="flex gap-2">
            <CurrencyDollar className="text-brand-purple" size={22} />
            <div>
              <p className="flex font-roboto font-normal leading-base text-base-subtitle ">
                Pagamento</p>
              <p className="font-roboto font-normal text-sm text-base-text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <button
              className="bg-base-button rounded-md p-3 text-xs flex items-center gap-3 w-full"
            >
              <CreditCard size={16} className="text-brand-purple" />
              CARTÃO DE DÉBITO
            </button>
            <button
              className="bg-base-button rounded-md p-3 text-xs flex items-center gap-3 w-full"
            >
              <Bank size={16} className="text-brand-purple" />
              CARTÃO DE CREDITO
            </button>
            <button
              className="bg-base-button rounded-md p-3 text-xs flex items-center gap-3 w-full"
            >
              <Money size={16} className="text-brand-purple" />
              DINHEIRO
            </button>
          </div>
        </div>
  )
}