"use client";

import { User } from "@/types/User";
import { create } from "zustand";

type UserStore =  {
    user: User & {
        isAuth: boolean;
    }

    create: ({user}: {
        user: User
    }) => void;

    // signUp: ({user}: {
    //     user: User
    // }) => void;

    // signIn: ({user}: {
    //     user: User
    // }) => void;

    // logout: ({user}: {
    //     user: User
    // }) => void;
}

const createUserStore = (set: any, get: () => UserStore) => ({
    user: {
        id: 0,
        authId: 0,
        name: "",
        email: "",
        phone: "",
        plan_id: 1,
        isAuth: false,
        plan_expires_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
    },

    create: async ({user}: {
        user: User
    }) => {
        set({user: {...user, isAuth: true}});
    },

    // signUp: async () => {
    //     // TODO
    // },

    // signIn: async () => {
    //     // TODO
    // },

    // logout: async () => {
    //     // TODO
    // },
});

export const useUserStore = create<UserStore>((set, get) => ({
    ...createUserStore(set, get)
}))
