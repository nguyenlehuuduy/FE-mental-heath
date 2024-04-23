import { cookies } from "next/headers";

const API_PATH = process.env.API_PRIVATE_URL;
const SESSION_KEY = "session_key";
const revalidateSeconds = Number(process.env.FETCH_CACHE_SECONDS);

export interface ApiResponse {
  status: number;
  headers: Headers;
  response: any;
}

export interface ApiErrorData {
  message: string;
}

export async function callGetRequest(url: string) {
  const cookieStore = cookies();
  const sessionKey = cookieStore.get(SESSION_KEY);

  const res = await fetch(`${API_PATH}${url}`, {
    method: "GET",
    headers: sessionKey ? [["Cookie", `${SESSION_KEY}=${sessionKey.value}`]] : undefined,
    next: { revalidate: revalidateSeconds },
  });
  const jo = await res.json();

  return { status: res.status, headers: res.headers, response: jo };
}

export async function callPostRequest(url: string, body: any) {
  const cookieStore = cookies();
  const sessionKey = cookieStore.get(SESSION_KEY);

  const headers: HeadersInit = [["Content-Type", "application/json"]];
  if (sessionKey) {
    headers.push(["Cookie", `${SESSION_KEY}=${sessionKey}`]);
  }

  const res = await fetch(`${API_PATH}${url}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });
  const jo = await res.json();

  return { status: res.status, headers: res.headers, response: jo };
}

export async function callPutRequest<Response, Request>(
  url: string,
  body: Request,
): Promise<{
  status: number;
  headers: Headers;
  response: Response;
}> {
  const cookieStore = cookies();
  const sessionKey = cookieStore.get(SESSION_KEY);

  const headers: HeadersInit = [["Content-Type", "application/json"]];
  if (sessionKey) {
    headers.push(["Cookie", `${SESSION_KEY}=${sessionKey}`]);
  }

  const res = await fetch(`${API_PATH}${url}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(body),
  });
  const jo = await res.json();

  return { status: res.status, headers: res.headers, response: jo };
}
