import { PlayerSlice, createPlayerSlice } from "@/stores/slices";
import { create } from "zustand";

export type Store = PlayerSlice;

// Create the store with all slices
export const useStore = create<Store>()((...args) => ({
  ...createPlayerSlice(...args),
}));
