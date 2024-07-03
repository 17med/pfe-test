import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLoggedIn: false,
  username: null,
  id: null,
  cart: null,
  isadmin: false,
  cart_vue: false,
  cart_show: () => set({ cart_vue: true }),
  cart_hide: () => set({ cart_vue: false }),
  login: (user, id, cart, isadmin) =>
    set({ isLoggedIn: true, user: user, id: id, cart: cart, isadmin: isadmin }),
  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
      id: null,
      cart: null,
      isadmin: false,
    }),
}));

export default useLoginStore;
