"use client";

import { useUserStore } from "@/stores/User";

export default function useUser() {
    const user = useUserStore((state) => state.user);

    return {
        user
    }
}