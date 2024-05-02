import { callGetRequest } from "./apiService";

interface SuggestFollowSuggestForResponse {
  id: string;
  fullName: string;
  phone: string;
  aboutMe: string;
  nickName: string;
  birth: string;
  address: string;
}

export type SuggestFollowForCard = {
  id: string;
  full_name: string;
  phone: string;
  about_me: string;
  nick_name: string;
  birth: string;
  address: string;
  // TODO_1214430: dont return avata in this
  avata: string;
};

export async function getAllSuggestFollowAccount(): Promise<
  Array<SuggestFollowForCard> | undefined
> {
  const res = await callGetRequest(`/user/suggest-follow`);
  if (res.status === 200) {
    const data: Array<SuggestFollowSuggestForResponse> = res.response;
    const listSuggestFollow: Array<SuggestFollowForCard> = [];
    for (const item of data) {
      listSuggestFollow.push({
        id: item.id,
        about_me: item.aboutMe,
        address: item.address,
        avata:
          "https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp",
        birth: item.birth,
        full_name: item.fullName,
        nick_name: item.nickName,
        phone: item.phone,
      });
    }
    return listSuggestFollow;
  }
}
