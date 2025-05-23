import { Player } from "@/types";
import { StateCreator } from "zustand";

export interface PlayerSlice {
  players: Player[];
  addPlayer: (player: Player) => void;
  removePlayer: (id: number) => void;
  getPlayer: (id: number) => Player | undefined;
  updatePlayerName: (id: number, name: string) => void;
  updatePlayerLifeTotal: (id: number, lifeTotal: number) => void;
}

export const createPlayerSlice: StateCreator<
  PlayerSlice,
  [],
  [],
  PlayerSlice
> = (set, get) => ({
  players: [
    {
      id: 1,
      name: "Player 1",
      lifeTotal: 40,
      commander: "Commander 1",
      commanderDamage: 0,
      isAlive: true,
    },
  ],

  addPlayer: (player: Player) =>
    set((state) => ({
      players: [...state.players, player],
    })),

  removePlayer: (id: number) =>
    set((state) => ({
      players: state.players.filter((player) => player.id !== id),
    })),

  getPlayer: (id: number) => {
    const state = get();
    return state.players.find((player) => player.id === id);
  },

  updatePlayerName: (id: number, name: string) =>
    set((state) => ({
      players: state.players.map((player) => {
        if (player.id === id) {
          return { ...player, name };
        } else {
          return player;
        }
      }),
    })),

  updatePlayerLifeTotal: (id: number, lifeTotal: number) =>
    set((state) => ({
      players: state.players.map((player) => {
        if (player.id === id) {
          return lifeTotal > 0
            ? { ...player, lifeTotal, isAlive: true }
            : { ...player, lifeTotal: 0, isAlive: false };
        } else {
          return player;
        }
      }),
    })),
});
