import api from "@/config/api"

export default async function getWallets() {
    const response = await api(`/wallets`, {
        next: {
            tags: ["get-wallets"],
        }
    })

    return response.json()
}
