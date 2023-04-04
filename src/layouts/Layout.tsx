import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { CartProvider } from "../context/CartContext";

export function Layout() {
  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </>
  );
}
