import { Wallet } from "@/types/Wallet";
import { create } from "zustand";

type WalletsStore =  {
    wallets: Wallet[];

    selectedWallet: Wallet | null;
    setSelectedWallet: (wallet: Wallet) => void;

    addWallet: (wallet: Wallet) => void;
    removeWallet: (wallet: Wallet) => void;
    updateWallet: (wallet: Wallet) => void;

    getWallet: (id: string) => Wallet | null;
}

const createWalletsStore = (set: any, get: () => WalletsStore) => ({
    wallets: [],

    selectedWallet: null,
    setSelectedWallet: (wallet: Wallet) => set({
        selectedWallet: wallet
    }),

    addWallet: (wallet: Wallet) => {
        const {wallets} = get();

        set({
            wallets: [...wallets, wallet]
        })
    },

    removeWallet: (wallet: Wallet) => {
        const {wallets} = get();

        set({
            wallets: wallets.filter(w => w.id !== wallet.id)
        })
    },

    updateWallet: (wallet: Wallet) => {
        const {wallets} = get();

        set({
            wallets: wallets.map(w => w.id === wallet.id ? wallet : w)
        })
    },


    getWallet: (id: number) => {
        const {wallets} = get();

        return wallets.find(w => w.id === id) || null;
    }
    

});

export const useWalletsStore = create((set, get) => ({
    ...createWalletsStore
}))