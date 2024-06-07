import { COOKIE_ACCESS_TOKEN_KEY } from "@/lib/constants";
import { cookies } from "next/headers";

const API_PATH = process.env.API_PRIVATE_URL;
const SESSION_KEY = "Authorization";
const revalidateSeconds = Number(process.env.FETCH_CACHE_SECONDS);

export interface ApiResponse {
  status: number;
  headers: Headers;
  response: any;
}

export interface ApiErrorData {
  message: string;
}

export async function callGetRequest(
  url: string,
  tag?: string,
  cache?: RequestCache,
) {
  const cookieStore = cookies();
  const sessionKey = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY);
  const res = await fetch(`${API_PATH}${url}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${sessionKey?.value}` },
    next: { revalidate: revalidateSeconds, tags: ["all", tag ?? ""] },
    cache: cache,
  });
  const jo = await res.json();

  return { status: res.status, headers: res.headers, response: jo };
}

export async function submitMultiForm(url: string, formData: FormData) {
  const cookieStore = cookies();
  const sessionKey = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY);
  const res = await fetch(`${API_PATH}${url}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${sessionKey?.value}` },
    body: formData,
  });
  const jo = await res.json();
  return { status: res.status, headers: res.headers, response: jo };
}

export async function callPostRequest(url: string, body: any) {
  const cookieStore = cookies();
  const sessionKey = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY);
  const res = await fetch(`${API_PATH}${url}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${sessionKey?.value}`,
    },
    body: JSON.stringify(body),
  });
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const jo = await res.json();
    return { status: res.status, headers: res.headers, response: jo };
  } else {
    // Trả về một đối tượng chỉ có trạng thái và tiêu đề
    return { status: res.status, headers: res.headers, response: null };
  }
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

export async function callDeleteRequest(url: string) {
  const cookieStore = cookies();
  const sessionKey = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY);

  const res = await fetch(`${API_PATH}${url}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${sessionKey?.value}`,
    },
  });

  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const jo = await res.json();
    return { status: res.status, headers: res.headers, response: jo };
  } else {
    // Trả về một đối tượng chỉ có trạng thái và tiêu đề
    return { status: res.status, headers: res.headers, response: null };
  }
}
