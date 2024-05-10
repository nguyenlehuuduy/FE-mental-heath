import { unstable_cache } from "next/cache";
import { Pagination } from "../../type";
import { callGetRequest, callPostRequest } from "./apiService";
import { store } from "../../redux/configureStore";
import { addPostValid } from "../../redux/actions/post";

interface PostModel {
  id: string;
  contentText: string;
  accountId: string;
  account: {
    id: string;
    fullName: string;
    phone: string;
    aboutMe: string;
    nickName: string;
    birth: string;
    address: string;
  };
  is_liked: boolean;
  created_at: string;
  updated_at: string;
  totalReaction: number;
  totalComment: number;
  totalShare: number;
}

export type PostForCard = {
  post_id: string;
  content_text: string;
  created_at: string;
  total_reaction: number;
  total_comment: number;
  total_share: number;
  image_post: Array<string>;
  account: {
    id: string;
    name: string;
    nick_name: string;
    avata: string;
  };
  is_like: boolean;
  comment_recent: Array<{
    account: {
      id: string;
      name: string;
      nick_name: string;
      avata: string;
    };
    created_at: string;
    content: string;
  }>;
};

export async function getListValidPostByAccount(query?: string) {
  const res = await callGetRequest(
    `/post/valid-post?${query}`,
    "get-valid-post-cache",
  );
  console.log("result fetch post", res.response.data);

  if (res.status === 200) {
    const data: {
      data: PostModel[];
      pagination: Pagination;
    } = res.response;

    const result: PostForCard[] = [];
    for (const post of data.data) {
      result.push({
        account: {
          id: post.account.id,
          name: post.account.fullName,
          nick_name: post.account.nickName,
          //TODO_1158430:not_have_avata_in_response
          avata:
            "https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp",
        },
        content_text: post.contentText,
        created_at: post.created_at,
        // TODO_1159430:not_have_iamge_content
        image_post: [
          "https://cdn.dummyjson.com/cache/400x200/bitter-16/282828-white/918ca712a61b263dc1f9904dbef02560.png",
          "https://cdn.dummyjson.com/cache/400x200/bitter-16/282828-white/918ca712a61b263dc1f9904dbef02560.png",
        ],
        is_like: post.is_liked,
        post_id: post.id,
        total_comment: post.totalComment,
        total_reaction: post.totalReaction,
        total_share: post.totalShare,
        //TODO_1200430:not have comment recent in api
        comment_recent: [
          {
            account: {
              avata:
                "https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp",
              id: "1312312",
              name: "Nguyễn Hải Dương",
              nick_name: "kaka",
            },
            content: "tôi thấy bài viết này thú vị",
            created_at: new Date().toString(),
          },
          {
            account: {
              avata:
                "https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp",
              id: "1312312",
              name: "Nguyễn Lê Hữu Duy",
              nick_name: "huhu",
            },
            content: "tôi cũng như bạn Hải Dương",
            created_at: new Date().toString(),
          },
        ],
      });
    }
    return {
      data: result,
      pagination: data.pagination,
    };
  }
}

export type PostForRequest = {
  contentText: string;
  imagePaths?: Array<string>;
};

export async function uploadPost(
  body: PostForRequest,
): Promise<boolean | undefined> {
  const result = await callPostRequest("/post", body);
  if (result.status === 201) {
    return true;
  }
}

export async function likePost(postId: string) {
  const result = await callPostRequest("/likes", { postId: postId });
  if (result.status === 201) {
    return true;
  } else {
    return false;
  }
}

export async function commentPost(postId: string, contentComment: string) {
  const result = await callPostRequest("/comment", {
    accountId: "4bb557e2-b278-4d00-91f2-540ab85d2021",
    postId: postId,
    contentCmt: contentComment,
  });
  console.log("result comment", result);

  if (result.status === 201) {
    return true;
  } else {
    return false;
  }
}
