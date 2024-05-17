import api from "@/config/api";

export default async function getUser() {
  const response = await api('/user', {
    next: {
      tags: ["user"],
    },
  });

  return response.json();
}
