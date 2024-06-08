"use server";

import api from "@/config/api";

export default async function validatePassword({
  user_id,
  email,
  password
}: {
  user_id: number;
  email: string;
  password: string;
}) {
  const body = JSON.stringify({ email, password });

  const response = await api(`/user/validate-password`, {
    method: "POST",
    body
  });

  if (!response.ok) {
    if (response.status === 401) throw new Error("Invalid credentials.");

    throw new Error("Error validating password");
  }

  return response.json();
}
