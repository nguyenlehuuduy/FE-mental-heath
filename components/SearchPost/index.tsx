import { getTimeAgo } from "@/lib/utils";
import { SearchPostType } from "@/service/searchService";
import Image from "next/image";
import React from "react";

const SearchPost = ({ listPosts }: { listPosts: SearchPostType[] }) => {
  return (
    <div className="w-full flex flex-col ">
      <p className="py-2 text-lg font-bold border-b">Bài viết</p>
      <div
        className={`grid ${listPosts.length !== 0 && "grid-cols-2"} gap-4 max-h-[300px] overflow-y-auto`}
      >
        {listPosts.length === 0 ? (
          <p className="flex justify-center py-4">
            Không tìm thấy bài viết nào
          </p>
        ) : (
          listPosts.map((post, index) => (
            <div key={index} className="flex flex-col gap-2 p-2">
              <div className="flex flex-col">
                <p className="truncate text-base font-medium">
                  {post.contentText}
                </p>
                <span className="text-xs">{getTimeAgo(post.created_at)}</span>
              </div>
              <div className="relative w-[230px] h-[230px]">
                <Image
                  src="https://i.pinimg.com/564x/93/ed/71/93ed71f506e89bc5adc32020056afe97.jpg"
                  fill
                  alt="image post"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPost;
