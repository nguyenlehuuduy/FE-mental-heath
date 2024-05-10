"use server";

import { commentPost, likePost } from "@/service/postService";

export async function like(postId: string) {
  const result = await likePost(postId);
  return result;
}

export async function comment(postId: string, contentComment: string) {
  const result = await commentPost(postId, contentComment);
  return result;
}
