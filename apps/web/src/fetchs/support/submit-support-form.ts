import { toast } from "sonner";

export default async function submitSupportForm({ user_id, category_id, message }: {
    user_id: number;
    category_id: number;
    message: string;
}) {
    const body = {
        user_id,
        category_id,
        message,
    };

    try {
        await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/support`, {
            method: "POST",
            body: JSON.stringify(body)
        });

        toast.success("Your message has been sent. We'll get back to you as soon as possible.");
    } catch (error) {
        console.error(error);

        toast.error("An error occurred while submitting the form. Please try again later.");
    }
}
