const setCookie = ({ name, value, expires_at }: {
    name: string;
    value?: string;
    expires_at?: number;
}) => {
    let expires = `expires=${expires_at}`
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export default setCookie;