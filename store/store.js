import { create } from "zustand";

export const Store = create((set) => {
  return {
    isLoggedIn: false,
    poststate: "",
    post: [],
    schemes: [],
    change_schemes: (param) => set({ schemes: param }),
    change_post: (param) => set({ post: param }),
    change_post_state: (param) => set({ poststate: param }),
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
  };
});

export default Store;
