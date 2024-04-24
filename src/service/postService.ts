import { Pagination } from "../../type";
import { callGetRequest } from "./apiService";

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
  },
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
  },
  is_like: boolean,
  comment_recent: Array<{
    account: {
      id: string;
      name: string;
      nick_name: string;
      avata: string;
    },
    created_at: string;
    content: string;
  }>
}

export async function getListValidPostByAccount(query?: string): Promise<{ data: PostForCard[]; pagination: Pagination } | undefined> {
  const res = await callGetRequest(`/post/valid-post?${query}`);
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
          //TODO:not_have_avata_in_response
          avata: "https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp"
        },
        content_text: post.contentText,
        created_at: post.created_at,
        // TODO:not_have_iamge_content
        image_post: ["https://cdn.dummyjson.com/cache/400x200/bitter-16/282828-white/918ca712a61b263dc1f9904dbef02560.png", "https://cdn.dummyjson.com/cache/400x200/bitter-16/282828-white/918ca712a61b263dc1f9904dbef02560.png"],
        //TODO
        is_like: true,
        post_id: post.id,
        total_comment: post.totalComment,
        total_reaction: post.totalReaction,
        total_share: post.totalShare,
        //TODO
        comment_recent: [{
          account: {
            avata: "https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp",
            id: "1312312",
            name: "Nguyễn Hải Dương",
            nick_name: "kaka"
          },
          content: "tôi thấy bài viết này thú vị",
          created_at: new Date().toString()
        },
        {
          account: {
            avata: "https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp",
            id: "1312312",
            name: "Nguyễn Lê Hữu Duy",
            nick_name: "huhu"
          },
          content: "tôi cũng như bạn Hải Dương",
          created_at: new Date().toString()
        }]
      })
    }
    return {
      data: result,
      pagination: data.pagination
    }
  }
}