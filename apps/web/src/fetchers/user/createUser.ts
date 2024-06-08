"use server";

import api from "@/config/api";

export default async function createUser({
  auth_id,
  name,
  email
}: {
  auth_id: string;
  name: string;
  email: string;
}): Promise<void> {
  const body = JSON.stringify({ auth_id, name, email });

  const response = await api("/auth/sign-up", {
    method: "POST",
    body
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}
