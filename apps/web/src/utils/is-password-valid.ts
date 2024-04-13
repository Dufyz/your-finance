import validatePassword from "@/fetchs/user/validatePassword";
import { toast } from "sonner";

export default async function isPasswordValid({ id, email, password }: {
    id: number;
    email: string;
    password: string;
}) {
    try {
        await validatePassword({ id, email: email, password });
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
