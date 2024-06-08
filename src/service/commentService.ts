import { callGetRequest } from "./apiService";

interface CommentByPostForResponse {
  id: string;
  contentCmt: string;
  accountId: string;
  created_at: string;
  updated_at: string;
  account?: {
    id: string,
    fullName: string,
    avata: string,
    nickName: string
  }
}

export type CommentForCard = {
  account: {
    avata?: string;
    id: string;
    name: string;
    nick_name?: string;
  };
  content: string;
  created_at: string;
  updated_at?: string;
}

export async function getAllCommentByPostId(idPost: string): Promise<Array<CommentForCard> | undefined> {
  try {
    const res = await callGetRequest(
      `/comment/posts/${idPost}`,
      "get-all-comment-by-postId",
      "no-store",
    );
    if (res.status === 200) {
      const data: Array<CommentByPostForResponse> = res.response;
      const result: Array<CommentForCard> = [];
      for (const item of data) {
        result.push({
          account: {
            id: item.account?.id ?? "",
            name: item.account?.fullName ?? "",
            avata: item.account?.avata &&
              `${process.env.API_BASE_URL}${item.account.avata}`,
            nick_name: item.account?.nickName
          },
          content: item.contentCmt,
          created_at: item.created_at,
          updated_at: item.updated_at
        })
      }
      return result;
    }
  } catch (error) {
    console.error(error)
  }
}