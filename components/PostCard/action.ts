"use server";

import {
  commentPost,
  getListValidPostByAccount,
  likePost,
} from "@/service/postService";

export async function getValidPost(page: number) {
  const result = await getListValidPostByAccount(page);
  return result?.data;
}

export async function like(postId: string) {
  const result = await likePost(postId);
  return result;
}

export async function comment(
  postId: string,
  accountId: string,
  contentComment: string,
) {
  const result = await commentPost(postId, accountId, contentComment);
  return result;
}
