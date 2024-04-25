import supabase from "@/config/supabase";

interface IShowTotalSavesService {
    user_id: number;
}

export default async function ShowTotalSaves({ user_id }: IShowTotalSavesService) {
    let totalSaves = 0; 
    
    await supabase
    .from("wallets")
    .select("current_balance")
    .eq("user_id", user_id)
    .eq("type", "saving")
    .then(({ data }) => {
        if (data) {
            totalSaves = data.reduce((acc, { current_balance }) => acc + current_balance, 0);
        }
    });

    return {
        value: totalSaves,
        percentage: 0,
    };
}