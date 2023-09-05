import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removeItem = (id) => {
    const exitsItem = cart.filter((item) => item.id !== id);
    setCart(exitsItem);
  };
  const getTotalPrice = () => {
    let totolPrice = 0
    cart.forEach((item) => {
      totolPrice += item.price
    })
    return totolPrice
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
