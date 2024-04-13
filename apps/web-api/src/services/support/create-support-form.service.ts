import supabase from "@/config/supabase";

interface ICreateSupportFormService {
    user_id: number;
    category_id: string;
    message: string;
    isAgreed: boolean;
}

export default async function CreateSupportForm({ user_id, category_id, message, isAgreed }: ICreateSupportFormService) {
    const { data, error } = await supabase.from("supportforms").upsert({
        user_id,
        category_id,
        message,
        isAgreed
    })

    if (error) {
        console.log("error", error);
        throw new Error(error.message);
    }

    return data;
}