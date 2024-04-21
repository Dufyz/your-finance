import { Wallet } from "@/types/Wallet";
import { create } from "zustand";

type WalletsStore = {
    wallets: Wallet[];

    addWallet: (wallet: Wallet) => void;
    removeWallet: (wallet: Wallet) => void;
    updateWallet: (wallet: Wallet) => void;
}

const createWalletsStore = (set: any, get: () => WalletsStore) => ({
    wallets: [],

    addWallet: (wallet: Wallet) => {
        set((state: WalletsStore) => ({
            wallets: [...state.wallets, wallet]
        }));
    },

    removeWallet: (wallet: Wallet) => {
        set((state: WalletsStore) => ({
            wallets: state.wallets.filter(w => w.id !== wallet.id)
        }));
    },

    updateWallet: (wallet: Wallet) => {
        set((state: WalletsStore) => ({
            wallets: state.wallets.map(w => w.id === wallet.id ? wallet : w)
        }));
    }
});

export const useWalletsStore = create<WalletsStore>((set, get) => ({
    ...createWalletsStore(set, get)
}))