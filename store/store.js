import { create } from "zustand";

export const Store = create((set) => {
  return {
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
  };
});

export default Store;
