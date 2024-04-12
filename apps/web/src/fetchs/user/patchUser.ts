"use server"

import { revalidateTag } from "next/cache";

interface IPatchUser {
  id: number;
  name?: string;
  email?: string;
}

export default async function patchUser({ id, name, email }: IPatchUser) {
  "use server"

  const body = JSON.stringify({ id, name, email });

  await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body
  })

  revalidateTag("user")
}