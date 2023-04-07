import { MapPin, ShoppingCart } from "phosphor-react"
import {NavLink } from "react-router-dom"

import LogoCoffeeDelivery from "../assets/logo-coffee-delivery.svg"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <header className="flex justify-between py-8 px-40 mx-auto max-w-[1440px]">
      <NavLink to="/" title="Home">
        <img
          className="h-10"
          src={LogoCoffeeDelivery}
        />
      </NavLink>
      <div className="flex gap-3">
        <button className="p-2 flex gap-1 bg-brand-purple-light text-brand-purple-dark rounded-md font-roboto font-normal hover:opacity-90 hover:transition-opacity" >
          <MapPin size={22} weight="fill" className="text-brand-purple " />
          <p>Guarulhos, SP</p>
        </button>
        <NavLink to="/checkout" title="Carrinho" className="p-2 flex bg-brand-purple-light rounded-md hover:opacity-90 hover:transition-opacity relative">
          { cart.length > 0 && <p className="absolute bg-brand-yellow-dark w-5 h-5 rounded-full font-roboto font-bold text-xs flex items-center justify-center text-base-white bottom-7 left-7">{cart.length}</p>}
          <ShoppingCart size={22} weight="fill" className="text-brand-yellow-dark"/>
        </NavLink>
      </div>  

    </header>
  )
} 