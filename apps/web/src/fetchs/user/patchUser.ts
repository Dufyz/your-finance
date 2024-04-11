"use server"

import { revalidateTag } from "next/cache";

export default async function patchUser(formData: any) {
  "use server"

  const id = Number(formData.get("id"));
  const name = formData.get("name");

  await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id, name })
  })

  revalidateTag("user")
}