"use server";

import validatePassword from "@/fetchers/user/validatePassword";
import { toast } from "sonner";

export default async function isPasswordValid({
  user_id,
  email,
  password
}: {
  user_id: number;
  email: string;
  password: string;
}) {
  try {
    await validatePassword({ user_id, email: email, password });
    return true;
  } catch (error) {
    console.log(error?.message);

    if (error?.message.includes("Invalid credentials")) {
      toast.error("Invalid credentials. Please try again.");
    } else {
      toast.error("Error validating password. Please try again.");
    }

    return false;
  }
}
