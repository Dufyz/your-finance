import { User } from "@/types/User";
import { create } from "zustand";

type UserStore =  User & {
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
    isAuth: false,
    plan_id: 1,
    plan_expires_at: new Date(),
    created_at: new Date(),
    updated_at: new Date(),

    signUp: async () => {
        // TODO
    },

    signIn: async () => {
        // TODO

        console.log("UserStore signIn")
    },

    logout: async () => {
        // TODO
    }
});

export const useUserStore = create((set, get) => ({
    ...createUserStore
}))