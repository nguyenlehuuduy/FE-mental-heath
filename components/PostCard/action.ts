"use server";

import {
  commentPost,
  getListValidPostByAccount,
  likePost,
} from "@/service/postService";
import { revalidateTag } from "next/cache";

export async function getValidPost(page: number) {
  const result = await getListValidPostByAccount(page);
  revalidateTag("get-valid-post-cache");
  return result?.data;
}

export async function like(postId: string) {
  const result = await likePost(postId);
  return result;
}

export async function comment(postId: string, contentComment: string) {
  const result = await commentPost(postId, contentComment);
  return result;
}
