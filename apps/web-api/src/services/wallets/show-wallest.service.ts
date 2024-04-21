import supabase from "@/config/supabase";

interface IShowWalletsService {
    user_id: number;
}

export default async function ShowWallets({ user_id }: IShowWalletsService) {
    const { data, error } = await supabase.from("wallets").select("*").eq("user_id", user_id);

    if (error) {
        console.log("error", error);
        throw new Error(error.message);
    }

    return data;
}