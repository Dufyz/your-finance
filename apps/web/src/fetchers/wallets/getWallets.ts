import apiServer from "@/config/apiServer";

export default async function getWallets({ user_id }: { user_id: number }) {
  const response = await apiServer(`/wallets`, {
    next: {
      tags: [`get-wallets-${user_id}`]
    }
  });

  if (!response.ok) {
    throw new Error("Error getting wallets");
  }

  return response.json();
}
