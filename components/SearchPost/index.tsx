import { getTimeAgo } from "@/lib/utils";
import { SearchPostTypeForCard } from "@/service/searchService";
import Image from "next/image";
import React from "react";
import AvatarAccount from "../Avata";
import Link from "next/link";

const SearchPost = ({ listPosts }: { listPosts: SearchPostTypeForCard[] }) => {
  return (
    <div className="w-full flex flex-col ">
      <p className="py-2 text-lg font-bold border-b">Bài viết</p>
      <div
        className={`flex flex-col w-full max-h-[300px] overflow-y-auto`}
      >
        {listPosts.length === 0 ? (
          <p className="flex justify-center py-4">
            Không tìm thấy bài viết nào
          </p>
        ) : (
          listPosts.map((post, index) => (
            <div key={index} className="flex justify-between gap-2 p-2 cursor-pointer" onClick={() => { }}>
              <div className="flex gap-3">
                <div className="w-[50px] h-[50px]">
                  <AvatarAccount
                    name={post.account.full_name}
                    filePath={post.account.avata}
                    height={50}
                    width={50}
                    key={index} />
                </div>

                <div className="flex flex-col">
                  <Link href={`/profile/${post.account.id}`} className="truncate text-sm font-medium underline cursor-pointer">
                    {post.account.full_name}
                  </Link>
                  <p className="truncate text-base">
                    {post.contentText}
                  </p>
                  <div className="flex gap-4">
                    <span className="text-xs">{getTimeAgo(post.created_at)}</span>
                    <p className="text-xs text-blue-600 underline cursor-pointer">Xem bài viết</p>
                  </div>
                </div>
              </div>

              <div className="relative w-[230px] rounded-md overflow-hidden">
                <Image
                  src={"https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg"}
                  fill
                  alt="image post"
                  className="absolute object-cover w-full h-auto" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPost;
