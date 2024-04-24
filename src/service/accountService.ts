import { callGetRequest, callPostRequest } from "./apiService";

export interface MyselfResponse {
  id: string;
  name: string;
  age: string;
  phone: string;
  nickName: string;
  email: string;
  mySelf: string;
  avata: string;
  address: string;
  role: string;
}

export async function getLoginAccount(): Promise<MyselfResponse | undefined> {
  const result = await callGetRequest("/auth/profile");
  if (result.status === 200) {
    return result.response as MyselfResponse;
  }
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export async function loginAccount(body: LoginRequest): Promise<LoginResponse | undefined> {
  const result = await callPostRequest("/auth/login", body);
  if (result.status === 200) {
    return {
      accessToken: result.response.access_token,
    };
  }
}

