"use client";

import { useUserStore } from "@/stores/User";
import { User } from "@/types/User";
import { useEffect } from "react";

export default function UserSubscription({ user }: { user: User }) {
    const setUser = useUserStore((state) => state.setUser);


    useEffect(() => {
        setUser({ user });
    }, [])

    return (
        <></>
    )

}