"use server"

import apiServer from "@/config/apiServer";
import { revalidateTag } from "next/cache";

interface IPatchUser {
  user_id: number;
  name?: string;
  email?: string;
  password?: string;
  currency?: string;
  is_dark_mode?: boolean;
}

export default async function patchUser({ user_id, name, email, password, currency, is_dark_mode }: IPatchUser) {
  "use server"

  const body = JSON.stringify({ user_id, name, email, password, currency, is_dark_mode });

  await apiServer(`/user`, {
    method: "PATCH",
    body
  })

  revalidateTag(`user-${user_id}`)
}