"use server";

import apiClient from "@/config/apiClient";

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

  const response = await apiClient("/auth/sign-up", {
    method: "POST",
    body
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}
