import { callGetRequest, callPostRequest } from "./apiService";

export type SearchAccountType = {
  id: string;
  fullName: string;
  aboutMe: string;
  nickName: string;
  address: string;
  avatar: string;
};

export type SearchPostType = {
  id: string;
  contentText: string;
  accountId: string;
  created_at: string;
  updated_at: string;
  totalReaction: string;
  totalComment: string;
  totalShare: string;
  images: [
    {
      accountId: string;
      postId: string;
      path: string;
    },
  ];
};

export async function getSearchAccount(keyword: string) {
  const res = await callGetRequest(
    `/search/accounts?keyword=${keyword}`,
    "get-search-accounts",
  );
  if (res.status === 200) {
    return res.response;
  } else {
    return [];
  }
}

export async function getSearchPost(keyword: string) {
  const res = await callGetRequest(
    `/search/posts?keyword=${keyword}`,
    "get-search-posts",
  );
  if (res.status === 200) {
    return res.response;
  } else {
    return [];
  }
}
