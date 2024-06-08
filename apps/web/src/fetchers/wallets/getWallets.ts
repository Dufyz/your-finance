"use server";

import api from "@/config/api";

export default async function getWallets({ user_id }: { user_id: number }) {
  const response = await api(`/wallets`, {
    next: {
      tags: [`get-wallets-${user_id}`]
    }
  });

  if (!response.ok) {
    throw new Error("Error getting wallets");
  }

  return response.json();
}
