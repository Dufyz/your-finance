export default async function validatePassword({ id, email, password }: {
    id: number;
    email: string;
    password: string;
}) {
    const body = JSON.stringify({ id, email, password });

    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/auth/validate-password`, {
        method: 'POST',
        body,
    });

    if (!response.ok) {
        if (response.status === 401) throw new Error('Invalid credentials.');

        throw new Error('Error validating password');
    }

    return response.json()
}
