export type Wallet = {
  id: number;
  user_id: number;
  bank_id?: number;
  nickname: string;
  type: "saving" | "current" | "wallet";
  initial_balance: number;
  current_balance: number;
  is_main: boolean;
  created_at: Date;
  updated_at: Date;
};
