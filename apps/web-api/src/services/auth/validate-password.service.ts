import supabase from "@/config/supabase";

interface IValidatePasswordService {
    id: number;
    email: string;
    password: string;
}

export const validatePasswordService = async ({
    id,
    email,
    password,
}: IValidatePasswordService) => {
    const { error } = await supabase.auth.signInWithPassword({
        email, password
    })

    if (error) {
        console.log("error", error);

        throw new Error(error.message);
    }

    return true;
};
