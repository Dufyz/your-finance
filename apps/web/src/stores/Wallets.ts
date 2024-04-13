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
        const { wallets } = get();

        set({
            wallets: [...wallets, wallet]
        })
    },

    removeWallet: (wallet: Wallet) => {
        const { wallets } = get();

        set({
            wallets: wallets.filter(w => w.id !== wallet.id)
        })
    },

    updateWallet: (wallet: Wallet) => {
        const { wallets } = get();

        set({
            wallets: wallets.map(w => w.id === wallet.id ? wallet : w)
        })
    },

});

export const useWalletsStore = create((set, get) => ({
    ...createWalletsStore
}))