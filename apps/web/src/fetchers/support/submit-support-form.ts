"use server";

import apiServer from "@/config/apiServer";

export default async function submitSupportForm({
  user_id,
  category_id,
  message,
  isAgreed
}: {
  user_id: number;
  category_id: number;
  message: string;
  isAgreed: boolean;
}): Promise<void> {
  const body = JSON.stringify({
    user_id,
    category_id,
    message,
    isAgreed
  });

  const response = await apiServer(`/support`, {
    method: "POST",
    body
  });

  if (!response.ok) {
    throw new Error("Error submitting support form");
  }
}
