export type User = {
    id: number;
    authId: string;
    name: string;
    email: string;
    phone?: string;
    country: string;
    currency: string;
    language: string;
    time_zone: string;
    plan_id: number;
    plan_expires_at: Date;
    created_at: Date;
    updated_at: Date;
}