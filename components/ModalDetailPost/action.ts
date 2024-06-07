"use server";

import { getDetailPost } from "@/service/postService";

export const postDetail = async (idPost: string) => {
  const res = await getDetailPost(idPost);
  return res;
};
