import supabase from "@/config/supabase";

interface ICreateSupportFormService {
    user_id: number;
    category_id: number;
    message: string;
    isAgreed: boolean;
}

export default async function CreateSupportForm({ user_id, category_id, message, isAgreed }: ICreateSupportFormService) {
    if (!isAgreed) {
        throw new Error("You must agree to our privacy policy");
    }
    
    const { data, error } = await supabase.from("support_forms").upsert({
        user_id,
        category_id,
        message,
    })

    if (error) {
        console.log("error", error);
        throw new Error(error.message);
    }

    return data;
}