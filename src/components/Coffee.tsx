import { Plus, Minus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { priceFormatter } from "../utils/formatter";
import { CartContext } from "../context/CartContext";
import { toast } from 'react-toastify';

interface CoffeeProps {
  id: number;
  name: string;
  description: string;
  src: string;
  price: number;
  tags: string[];
}

export function Coffee({ id, name, description, src, price, tags }: CoffeeProps) {
  const [unitsCounter, setUnitsCounter] = useState(0)

  const { addCoffeToCart } = useContext(CartContext)

  function handleUnitisCoffee(operation: string) {
    if (operation === 'remove' && unitsCounter >= 1) {
      setUnitsCounter(state => state - 1)
    } else if (operation === 'add') {
      setUnitsCounter(state => state + 1)
    }
  }

  function handleAddToCart(id: number, amount: number, name: string) {
    if(amount === 0 ) {
    toast.error(`Adicione no minimo uma unidade`, )

    } else {
      addCoffeToCart(id, amount)
      setUnitsCounter(0)
      toast.success(`${name}`, {icon: <ShoppingCartSimple size={20}/> })

    }
  }

  const formatedPrice = priceFormatter.format(unitsCounter ? unitsCounter * price : price)
  return (
    <div className="w-64 h-80 px-5 flex flex-col items-center bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md text-center">
      <img src={src} className="w-[120px] h-[120px] mt-[-1rem]" alt="" />
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <div
            key={tag}
            className="mt-3 bg-brand-yellow-light rounded-full py-1 px-2"
          >
            <div className="font-roboto font-bold text-[10px] leading-[130%] text-brand-yellow-dark uppercase">
              {tag}
            </div>
          </div>
        ))}
      </div>
      <p className="font-baloo font-bold text-xl mt-4 text-base-subtitle">
        {name}
      </p>
      <p className="font-roboto font-normal text-base-label text-[14px] mt-2">
        {description}
      </p>
      <div className="mt-[33px] w-full flex gap-2 items-center justify-end">
        <div className="flex items-baseline gap-1 mr-auto">
          <p className="font-roboto text-[14px] text-base-text">R$</p>
          <p className="font-baloo font-extrabold text-2xl text-base-text">{formatedPrice}</p>
        </div>
        <div className=" flex items-center justify-between gap-1 bg-base-button rounded-[6px] w-[72px] h-[38px] p-2">
          <button onClick={() => handleUnitisCoffee('remove')}>
            <Minus size={14} weight="bold" className=" text-brand-purple" />
          </button>
          {unitsCounter}
          <button onClick={() => handleUnitisCoffee('add')}>
            <Plus size={14} weight="bold" className=" text-brand-purple" />
          </button>
        </div>

        <button
          className="bg-brand-purple-dark text-white p-2 rounded-[6px] hover:opacity-90 transition"
          onClick={() => handleAddToCart(id, unitsCounter, name)}
        >
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </div>
    </div>
  );
}
