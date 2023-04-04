import { createContext, ReactNode, useState } from "react";
import { coffees } from "../services/coffees";

interface coffee {
  name: string,
  description: string,
  src: string,
  price: number,
  tags: string[],
}

interface CartContextType {
  cart: coffee[];
  addToCart: (coffee: coffee) => void
  removeToCart: (name: string) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as  CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<coffee[]>([])

  function addToCart(coffee: coffee) {
    setCart(state => [...state, coffee])
  }

  function removeToCart(name: string) {
    let removedOneItem = false
    const newCart = cart.filter((coffee) => {
      if(name === coffee.name && !removedOneItem) {
        removedOneItem = true
        return
      } else {
        return coffee
      }
    })
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeToCart
    }
    } >
      {children}
    </CartContext.Provider>
  )

}