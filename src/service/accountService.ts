import { unstable_cache } from "next/cache";
import { callGetRequest, callPostRequest } from "./apiService";
import { store } from "../../redux/configureStore";
import { getCurrentUser } from "../../redux/actions/auth";

interface MyselfResponse {
  id: string;
  fullName: string;
  email: string;
  aboutMe: string;
  nickName: string;
  birth: string;
  address: string;
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
  avata: string;
  //TODO_2133430:not_have_banner_account
  banner: string;
  phone: string;
};

export const getLoginAccount = async () => {
  const result = await callGetRequest("/auth/profile");
  const data: MyselfResponse = result.response;

  if (result.status === 200) {
    return {
      about_me: data.aboutMe,
      address: data.address,
      //TODO_1158430:not_have_avata_in_response
      avata: data.avata && process.env.API_BASE_URL + data.avata,
      //TODO_2133430:not_have_banner_account
      banner:
        "https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg",
      birth: data.birth,
      email: data.email,
      full_name: data.fullName,
      id: data.id,
      nick_name: data.nickName,
      phone: data.phone,
    };
  }
};

const cachedProfile = unstable_cache(getLoginAccount, ["profile-cache"], {
  revalidate: 3600,
});

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface DataResponse {
  response: string;
  status: number;
  message: string;
  name: string;
}

export interface InfoAccountResponse {
  profileOtherAccount: {
    user: {
      id: string;
      fullName: string;
      phone: string;
      aboutMe: string;
      nickName: string;
      birth: string;
      address: string;
      avata: string;
    };
    followerCount: number;
    followingsCount: number;
  };
  is_follow: {
    status: number;
    message: string;
    followShipIdOfFollowing: string;
    followShipIdOfFollower: string;
  };
}

export async function loginAccount(
  body: LoginRequest,
): Promise<LoginResponse | undefined> {
  const result = await callPostRequest("/auth/login", body);
  if (result.status === 201 || result.status === 200) {
    return {
      accessToken: result.response.access_token,
    };
  }
}

export async function registerAccount(
  body: LoginRequest,
): Promise<DataResponse | undefined> {
  const result = await callPostRequest("/auth/register", body);
  return result.response;
}

export async function getProfile(accountId: string) {
  const result = await callGetRequest(
    `/user/other-account-profile/${accountId}`,
    "get-account-profile",
  );
  return result.response;
}
