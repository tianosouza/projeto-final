import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Products } from "../data/Products";

const { items } = Products;
const STORAGE_KEY = "meu_carrinho";

export const CartProvider = ({ children }) => {
  const fixedIds = ["1", "2"];

  const fixedProducts = fixedIds
    .map((id) => items.find((item) => String(item.id) === String(id)))
    .filter(Boolean)
    .map((product) => ({ ...product, qty: 1 }));

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const existingIds = parsed.map((item) => String(item.id));
        const missing = fixedProducts.filter(
          (fp) => !existingIds.includes(String(fp.id))
        );
        return [...parsed, ...missing];
      } catch {
        return fixedProducts;
      }
    }
    return fixedProducts;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
