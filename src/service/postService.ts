import { formatDate } from "@/lib/utils";
import { Pagination } from "../../type";
import { callGetRequest, callPostRequest } from "./apiService";
import { CommentForCard } from "./commentService";

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
    id: string;
    description: string;
    code: string;
  };
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
    description: string;
    code: string;
  };
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
        comment_recent:
          post?.comment_recent?.map((item) => ({
            ...item,
            account: {
              avata:
                item.account.avata &&
                process.env.API_BASE_URL + item.account.avata,
              id: item.account.id,
              name: item.account.name,
              nick_name: item.account.nick_name,
            },
          })) ?? [],
        permission_post: post.permissionPost,
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
  permissionPostId?: string;
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
        comment_recent:
          post?.comment_recent?.map((item) => ({
            ...item,
            account: {
              avata:
                item.account.avata &&
                process.env.API_BASE_URL + item.account.avata,
              id: item.account.id,
              name: item.account.name,
              nick_name: item.account.nick_name,
            },
          })) ?? [],
        permission_post: post.permissionPost,
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
        comment_recent:
          post?.comment_recent?.map((item) => ({
            ...item,
            account: {
              avata:
                item.account.avata &&
                process.env.API_BASE_URL + item.account.avata,
              id: item.account.id,
              name: item.account.name,
              nick_name: item.account.nick_name,
            },
          })) ?? [],
        permission_post: post.permissionPost,
      });
    }
    return result;
  }
}

export type DetailPostForResponse = {
  id: string;
  contentText: string;
  accountId: string;
  account: {
    avata?: string;
    id: string;
    email: string;
    fullName: string;
    nickName?: string;
    birth?: string;
    address?: string;
    aboutMe?: string;
    phone?: string;
  };
  created_at: string;
  updated_at: string;
  reactions: Array<{
    account: {
      avata?: string;
      id: string;
      fullName: string;
      nickName?: string;
    };
    created_at: string;
    updated_at: string;
  }>;
  comments: Array<{
    account: {
      avata?: string;
      id: string;
      fullName: string;
      nickName?: string;
    };
    contentCmt: string;
    created_at: string;
    updated_at: string;
  }>;

  permissionPost: {
    id: string;
    code: string;
    description: string;
  };
  images: Array<{
    accountId: string;
    postId: string;
    path: string;
  }>;
  totalComment: number;
  totalShare: number;
  totalReaction: number;
  is_liked: boolean;
  all_comment: Array<CommentForCard>;
  all_like_info: Array<{
    account: {
      avata?: string;
      id: string;
      name: string;
      nick_name?: string;
    };
    created_at: string;
    updated_at: string;
  }>;
};

export type PostDetailForCard = {
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
    avata?: string;
  };
  is_like: boolean;
  all_comment: Array<{
    content: string;
    account: {
      avata?: string;
      id: string;
      name: string;
      nick_name?: string;
    };
    created_at: string;
    updated_at?: string;
  }>;
  all_like_info: Array<{
    account: {
      avata?: string;
      id: string;
      name: string;
      nick_name?: string;
    };
    created_at: string;
    updated_at: string;
  }>;
  permission_post: {
    id: string;
    description: string;
    code: string;
  };
};

export async function getDetailPost(
  idPost: string,
): Promise<PostDetailForCard | undefined> {
  try {
    const res = await callGetRequest(
      `/post/${idPost}`,
      "get-detail-post",
      "no-store",
    );
    if (res.status === 200) {
      const post: DetailPostForResponse = res.response;

      const result: PostDetailForCard = {
        account: {
          avata:
            post.account.avata &&
            `${process.env.API_BASE_URL}${post.account.avata}`,
          id: post.account.id,
          name: post.account.fullName,
          nick_name: post.account.nickName ?? "",
        },
        all_comment:
          post.all_comment.map((item) => ({
            ...item,
            account: {
              avata:
                item.account.avata &&
                process.env.API_BASE_URL + item.account.avata,
              id: item.account.id,
              name: item.account.name,
              nick_name: item.account.nick_name,
            },
          })) ?? [],
        all_like_info: post.all_like_info,
        content_text: post.contentText,
        created_at: formatDate(post.created_at, "DD/MM/YYYY"),
        image_post: post.images.map(
          (item) => `${process.env.API_BASE_URL}${item.path}`,
        ),
        is_like: post.is_liked,
        permission_post: post.permissionPost,
        post_id: post.id,
        total_comment: post.totalComment,
        total_reaction: post.totalReaction,
        total_share: post.totalShare,
      };
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
