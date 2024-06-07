import {
  callDeleteRequest,
  callGetRequest,
  callPostRequest,
} from "./apiService";

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

export type RequestFollowerResponse = {
  id: string;
  sender: {
    id: string;
    fullName: string;
    phone: string;
    aboutMe: string;
    nickName: string;
    birth: string;
    address: string;
  };
  created_at: string;
  updated_at: string;
};

export type RequestFollowers = {
  id: string;
  sender: {
    id: string;
    fullName: string;
    phone: string;
    aboutMe: string;
    nickName: string;
    birth: string;
    address: string;
    avatar: string;
  };
  createdAt: string;
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

export async function getAllRequestFollowersAccount() {
  const res = await callGetRequest(
    `/follow/request-followers`,
    "get-request-follow",
  );
  if (res.status === 200 && res.response) {
    const data: Array<RequestFollowerResponse> = res.response;
    const listRequestFollowers: Array<RequestFollowers> = [];
    for (const item of data) {
      const requestFollowers: RequestFollowers = {
        id: item.id,
        sender: {
          id: item.sender.id,
          fullName: item.sender.fullName,
          phone: item.sender.phone,
          aboutMe: item.sender.aboutMe,
          nickName: item.sender.nickName,
          birth: item.sender.birth,
          address: item.sender.address,
          avatar:
            "https://i.pinimg.com/564x/93/ed/71/93ed71f506e89bc5adc32020056afe97.jpg",
        },
        createdAt: item.created_at,
      };
      listRequestFollowers.push(requestFollowers);
    }
    return listRequestFollowers;
  }
}

export async function acceptFollow(
  idRequest: string,
  idSender: string,
  idReciver: string,
) {
  const res = await callPostRequest(`/follow/accept/${idRequest}`, {
    senderId: idSender,
    reciverId: idReciver,
  });
  return res.status;
}

export async function followAccount(senderId: string, reciverId: string) {
  const res = await callPostRequest(`/follow`, {
    senderId: senderId,
    reciverId: reciverId,
  });
  return res.status;
}

export async function refuseFollow(idRequest: string) {
  const res = await callDeleteRequest(`/follow/${idRequest}`);
  return res.status;
}

export async function unfollowAccount(idFollow: string) {
  const res = await callDeleteRequest(`/follow/unfollow/${idFollow}`);
  return res.status;
}
