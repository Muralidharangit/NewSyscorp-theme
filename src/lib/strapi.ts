const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export async function fetchStrapi(
    path: string,
    urlParamsObject: Record<string, any> = {},
    options: RequestInit = {}
) {
    try {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        if (STRAPI_TOKEN && STRAPI_TOKEN !== "your_token_here" && STRAPI_TOKEN.trim() !== "") {
            headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
        }

        const queryString = options.method === 'POST' || options.method === 'PUT' ? "" : new URLSearchParams(urlParamsObject).toString();
        const requestUrl = `${STRAPI_URL}/api/${path}${queryString ? `?${queryString}` : ""}`;

        const response = await fetch(requestUrl, {
            ...options,
            headers,
            body: options.method === 'POST' || options.method === 'PUT' ? JSON.stringify(urlParamsObject) : undefined,
        });

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Strapi Error:", error);
        throw error;
    }
}