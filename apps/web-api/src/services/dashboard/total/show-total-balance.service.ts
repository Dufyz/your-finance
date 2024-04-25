import supabase from "@/config/supabase";

interface IShowTotalBalanceService {
    user_id: number;
}

export default async function ShowTotalBalance({ user_id }: IShowTotalBalanceService) {
    let totalSaves = 0; 
    
    await supabase
    .from("wallets")
    .select("current_balance")
    .eq("user_id", user_id)
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