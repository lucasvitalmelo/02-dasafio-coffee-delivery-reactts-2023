import { createContext, ReactNode, useState } from "react";

interface CoffeeProps {
  id: number
  amount: number
}

interface CartContextType {
  cart: CoffeeProps[]
  addCoffeToCart: (id: number, amount: number) => void
  removeToCart: (id: number, amount?: number) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CoffeeProps[]>([])

  function isNewCoffee(cart: CoffeeProps[], id: number) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        return false;
      }
    }
    return true;
  }

  function addCoffeToCart(id: number, amount: number) {
    if (!cart.length || isNewCoffee(cart, id)) {
      amount > 0 && setCart(state => [...state, { id, amount }])
    } else {
      const newCart = cart.map(coffee => (coffee.id === id ? { id, amount: coffee.amount + amount } : coffee));

      setCart(newCart)
    }
  }

  function removeToCart(id: number, amount?: number) {
    if (amount) {
      const newCart = cart.map(coffee => (coffee.id === id && coffee.amount > 1 ? { id, amount: coffee.amount - amount } : coffee));
      setCart(newCart)

    } else {
      const coffeeRemoved = cart.filter(coffee => coffee.id !== id)
      setCart(coffeeRemoved)
    }
  }
  return (
    <CartContext.Provider value={{
      cart,
      addCoffeToCart,
      removeToCart
    }
    } >
      {children}
    </CartContext.Provider>
  )

}