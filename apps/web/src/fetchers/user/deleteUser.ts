"use server";

import api from "@/config/api";

export default async function deleteUser({ id }: { id: number }) {
  const body = JSON.stringify({ id });

  const response = await api("/user", {
    method: "DELETE",
    body
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
