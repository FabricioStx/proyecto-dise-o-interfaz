import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type AuthModal = "none" | "login" | "register";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}

interface AppContextValue {
  sidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  updateQty: (id: number, delta: number) => void;
  authModal: AuthModal;
  openLogin: () => void;
  openRegister: () => void;
  closeAuth: () => void;
}

const DEFAULT_CART: CartItem[] = [
  {
    id: 1,
    name: "Suculenta en Maceta Frenchie",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1641362812721-d1f2ec82f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120&q=80",
    qty: 1,
  },
  {
    id: 2,
    name: "Planta Monstera",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1769536205224-d8f93426a197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120&q=80",
    qty: 1,
  },
];

const AppContext = createContext<AppContextValue>({
  sidebarOpen: false, openSidebar: () => {}, closeSidebar: () => {},
  cartOpen: false, openCart: () => {}, closeCart: () => {},
  cartItems: DEFAULT_CART, cartCount: 2, cartTotal: 43.98,
  updateQty: () => {},
  authModal: "none", openLogin: () => {}, openRegister: () => {}, closeAuth: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(DEFAULT_CART);
  const [authModal, setAuthModal] = useState<AuthModal>("none");

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  const updateQty = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item)
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <AppContext.Provider value={{
      sidebarOpen, openSidebar: () => setSidebarOpen(true), closeSidebar: () => setSidebarOpen(false),
      cartOpen, openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false),
      cartItems, cartCount, cartTotal, updateQty,
      authModal,
      openLogin: () => setAuthModal("login"),
      openRegister: () => setAuthModal("register"),
      closeAuth: () => setAuthModal("none"),
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
