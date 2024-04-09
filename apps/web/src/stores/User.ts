import { User } from "@/types/User";
import { create } from "zustand";

type UserStore =  User & {
    isAuth: boolean;

    signUp: ({user}: {
        user: User
    }) => void;

    signIn: ({user}: {
        user: User
    }) => void;

    logout: ({user}: {
        user: User
    }) => void;
}

const createUserStore = (set: any, get: () => UserStore) => ({
    id: 0,
    authId: "",
    name: "",
    email: "",
    phone: "",
    plan_id: 1,
    plan_expires_at: new Date(),
    created_at: new Date(),
    updated_at: new Date(),

    isAuth: false,

    signUp: async () => {
        // TODO
    },

    signIn: async () => {
        // TODO
    },

    logout: async () => {
        // TODO
    }
});

export const useUserStore = create((set, get) => ({
    ...createUserStore
}))