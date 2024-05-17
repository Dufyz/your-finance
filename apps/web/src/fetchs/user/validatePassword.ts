import api from "@/config/api";

export default async function validatePassword({ id, email, password }: {
    id: number;
    email: string;
    password: string;
}) {
    const body = JSON.stringify({ id, email, password });

    const response = await api(`/auth/validate-password`, {
        method: 'POST',
        body,
    });

    if (!response.ok) {
        if (response.status === 401) throw new Error('Invalid credentials.');

        throw new Error('Error validating password');
    }

    return response.json()
}
