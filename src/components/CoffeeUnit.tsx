import { Minus, Plus, Trash } from "phosphor-react";

export interface CoffeProps {
  img: string
  title: string
  count: number
  price: string
  handleAddCoffee: () => void
  handleRemoveCoffee: () => void
}


export function CoffeeUnit({img, title, count, price, handleAddCoffee, handleRemoveCoffee} : CoffeProps) {
  return (
    <div className="flex justify-between border-b-[1px] pb-6 mb-6">
      <div className="flex gap-2">
        <img
          src={img}
          alt=""
          className="w-16 h-16"
        />
        <div className="flex flex-col gap-2">
          <p className="font-roboto text-base-subtitle">{title}</p>
          <div className="flex gap-2">
            <div className=" flex items-center justify-between gap-1 bg-base-button rounded-[6px] w-[72px] h-8 p-2">
              <button onClick={handleRemoveCoffee}>
                <Minus size={14} weight="bold" className=" text-brand-purple" />
              </button>
              {count}
              <button onClick={handleAddCoffee}>
                <Plus size={14} weight="bold" className=" text-brand-purple" />
              </button>
            </div>
            <button
              className="flex bg-base-button rounded-md p-2 text-base-subtitle text-xs  items-center gap-3 "
            >
              <Trash size={16} className="text-brand-purple" />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <p className="font-roboto font-bold text-base-text">{price}</p>
    </div>
  )
}