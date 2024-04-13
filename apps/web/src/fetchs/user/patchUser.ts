"use server"

import { revalidateTag } from "next/cache";

interface IPatchUser {
  id: number;
  name?: string;
  email?: string;
  password?: string;
  currency?: string;
  is_dark_mode?: boolean;
}

export default async function patchUser({ id, name, email, password, currency, is_dark_mode }: IPatchUser) {
  "use server"

  const body = JSON.stringify({ id, name, email, password, currency, is_dark_mode });

  await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body
  })

  revalidateTag("user")
}