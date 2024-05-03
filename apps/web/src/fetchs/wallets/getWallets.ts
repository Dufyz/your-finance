export default async function getWallets() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/wallets`, {
        next: {
            tags: ["get-wallets"],
        }
    })

    return response.json()
}