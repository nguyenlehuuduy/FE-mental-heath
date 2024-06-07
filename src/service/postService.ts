import { unstable_cache } from "next/cache";
import { Pagination } from "../../type";
import { callGetRequest, callPostRequest } from "./apiService";
import { store } from "../../redux/configureStore";
import { addPostValid } from "../../redux/actions/post";
import { getTimeAgo } from "@/lib/utils";

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
    avata: string;
  };
  is_liked: boolean;
  created_at: string;
  updated_at: string;
  totalReaction: number;
  totalComment: number;
  totalShare: number;
  images: Array<{
    accountId: string;
    postId: string;
    path: string;
  }>;
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
  permissionPost: {
    id: string,
    description: string,
    code: string
  },
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
  permission_post: {
    id: string;
    description: string,
    code: string
  },
};

export async function getListValidPostByAccount(page?: number | 1) {
  const res = await callGetRequest(
    `/post/valid-post?pageNo=${page}&limit=2`,
    "get-valid-post-cache",
  );

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
          avata:
            post.account.avata &&
            `${process.env.API_BASE_URL}${post.account.avata}`,
        },
        content_text: post.contentText,
        created_at: post.created_at,
        image_post: post.images.map(
          (item) => `${process.env.API_BASE_URL}${item.path}`,
        ),
        is_like: post.is_liked,
        post_id: post.id,
        total_comment: post.totalComment,
        total_reaction: post.totalReaction,
        total_share: post.totalShare,
        comment_recent: post.comment_recent ?? [],
        permission_post: post.permissionPost
      });
    }
    return {
      data: result,
    };
  }
}

export type PostForRequest = {
  contentText: string;
  imagePaths?: Array<string>;
  permissionPostId?: string
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

export async function commentPost(
  postId: string,
  accountId: string,
  contentComment: string,
) {
  const result = await callPostRequest("/comment", {
    accountId: accountId,
    postId: postId,
    contentCmt: contentComment,
  });
  if (result.status === 201) {
    return true;
  } else {
    return false;
  }
}

export async function getPostMyProfile(page?: number | 1) {
  const res = await callGetRequest(
    `/post/get-posts-account?pageNo=${page}&limit=2`,
    "get-post-my-account",
  );

  if (res.status === 200) {
    const data: PostModel[] = res.response;

    const result: PostForCard[] = [];
    for (const post of data) {
      result.push({
        account: {
          id: post.account.id,
          name: post.account.fullName,
          nick_name: post.account.nickName,
          avata:
            post.account.avata &&
            `${process.env.API_BASE_URL}${post.account.avata}`,
        },
        content_text: post.contentText,
        created_at: post.created_at,
        image_post: post.images.map(
          (item) => `${process.env.API_BASE_URL}${item.path}`,
        ),
        is_like: post.is_liked,
        post_id: post.id,
        total_comment: post.totalComment,
        total_reaction: post.totalReaction,
        total_share: post.totalShare,
        comment_recent: post.comment_recent ?? [],
        permission_post: post.permissionPost
      });
    }
    return result;
  }
}

export async function getPostOtherAccount(
  idAccount: string,
  page?: number | 1,
) {
  const res = await callGetRequest(
    `/post/get-posts-other-account/${idAccount}?pageNo=${page}&limit=2`,
    "get-post-other-account",
  );

  if (res.status === 200) {
    const data: PostModel[] = res.response;

    const result: PostForCard[] = [];
    for (const post of data) {
      result.push({
        account: {
          id: post.account.id,
          name: post.account.fullName,
          nick_name: post.account.nickName,
          avata:
            post.account.avata &&
            `${process.env.API_BASE_URL}${post.account.avata}`,
        },
        content_text: post.contentText,
        created_at: post.created_at,
        image_post: post.images.map(
          (item) => `${process.env.API_BASE_URL}${item.path}`,
        ),
        is_like: post.is_liked,
        post_id: post.id,
        total_comment: post.totalComment,
        total_reaction: post.totalReaction,
        total_share: post.totalShare,
        comment_recent: post.comment_recent ?? [],
        permission_post: post.permissionPost

      });
    }
    return result;
  }
}

export async function getDetailPost(idPost: string) {
  const res = await callGetRequest(
    `/post/${idPost}`,
    "get-detail-post",
    "no-store",
  );
  if (res.status === 200) {
    const post: PostModel = res.response;

    const result: PostForCard = {
      account: {
        id: post.account.id,
        name: post.account.fullName,
        nick_name: post.account.nickName,
        avata:
          post.account.avata &&
          `${process.env.API_BASE_URL}${post.account.avata}`,
      },
      content_text: post.contentText,
      created_at: post.created_at,
      image_post: post.images.map(
        (item) => `${process.env.API_BASE_URL}${item.path}`,
      ),
      is_like: post.is_liked,
      post_id: post.id,
      total_comment: post.totalComment,
      total_reaction: post.totalReaction,
      total_share: post.totalShare,
      comment_recent: post.comment_recent ?? [],
      permission_post: post.permissionPost
    };
    return result;
  }
  throw new Error("Failed to fetch post details");
}