"use server";

import { getSearchAccount, getSearchPost } from "@/service/searchService";

export async function getAccountsByName(keyword: string) {
  const listAccount = await getSearchAccount(keyword);
  return listAccount;
}

export async function getPostsByName(keyword: string) {
  const listPost = await getSearchPost(keyword);
  return listPost;
}
