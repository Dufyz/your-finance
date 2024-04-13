export type Wallet = {
    id: number;
    user_id: number;
    bank_id?: number;
    nickname: string;
    type: "saving" | "current" | "wallet";
    intial_balance: number;
    current_balance: number;
    isMain: boolean;
    created_at: Date;
    updated_at: Date;
}