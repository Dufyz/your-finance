import supabaseServer from "./supabase/supabaseServer";

export default async function api(
    endpoint: string,
    options: RequestInit = {}) {
    const baseUrl = process.env.NEXT_PUBLIC_WEB_API;

    const {data: {session}} = await supabaseServer.auth.getSession();

    const sessionToken = session?.access_token
    
    const defaultHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionToken}`,
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

