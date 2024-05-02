import { unstable_cache } from "next/cache";
import { callGetRequest, callPostRequest } from "./apiService";

interface MyselfResponse {
  id: string;
  fullName: string;
  email: string;
  aboutMe: string;
  nickName: string;
  birth: string;
  address: string;
  //TODO
  avata: string;
  phone: string;
}

export type MyselfForCard = {
  id: string;
  full_name: string;
  email: string;
  about_me: string;
  nick_name: string;
  birth: string;
  address: string;
  //TODO
  avata: string;
  //TODO_2133430:not_have_banner_account
  banner: string;
  phone: string;
};

export async function getLoginAccount(): Promise<MyselfForCard | undefined> {
  const result = await callGetRequest("/auth/profile");
  const data: MyselfResponse = result.response;
  if (result.status === 200) {
    return {
      about_me: data.aboutMe,
      address: data.address,
      //TODO_1158430:not_have_avata_in_response
      avata:
        "https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp",
      //TODO_2133430:not_have_banner_account
      banner:
        "https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp",
      birth: data.birth,
      email: data.email,
      full_name: data.fullName,
      id: data.id,
      nick_name: data.nickName,
      phone: data.phone,
    };
  }
}

const cachedProfile = unstable_cache(getLoginAccount, ["profile-cache"], {
  revalidate: 3600,
});

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export async function loginAccount(
  body: LoginRequest,
): Promise<LoginResponse | undefined> {
  const result = await callPostRequest("/auth/login", body);
  if (result.status === 201) {
    return {
      accessToken: result.response.access_token,
    };
  }
}
