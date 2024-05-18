import supabase from "@/config/supabase";

interface IValidatePasswordService {
    email: string;
    password: string;
}

export const validatePasswordService = async ({
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
