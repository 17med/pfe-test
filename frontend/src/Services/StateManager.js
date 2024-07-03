import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLoggedIn: false,
  username: null,
  id: null,
  cart: null,
  isadmin: false,
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
