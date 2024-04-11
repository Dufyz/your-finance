
export default async function getUser() {
    const response= await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/user`, {
      next: {
        tags: ["user"],
      }
    })

    return response.json()
    }
  