import supabaseClient from "./supabase/supabaseClient";

export default async function apiClient(
    endpoint: string,
    options: RequestInit = {}) {
    const baseUrl = process.env.NEXT_PUBLIC_WEB_API;

    const {data: {session}} = await supabaseClient.auth.getSession();

    const sessionToken = session?.access_token;

    const defaultHeaders = {
        // "Content-Type": "application/json",
        // "Authorization": `Bearer ${sessionToken}`,
    };

    const mergedOptions = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    return await fetch(`${baseUrl}/api${endpoint}`, mergedOptions);
};

