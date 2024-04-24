export type Transaction = {
    id: number;
    user_id: number;
    wallet_id: number;
    card_id: number;
    category_id: number;
    value: number;
    description: string;
    type: string;
    transaction_date: Date;
    created_at: Date;
    updated_at: Date;
}