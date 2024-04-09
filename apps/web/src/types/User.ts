export type User = {
    id: number;
    authId: string;
    name: string;
    email: string;
    phone?: string;
    plan_id: number;
    plan_expires_at: Date;
    created_at: Date;
    updated_at: Date;
}