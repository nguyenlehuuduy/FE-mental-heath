"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AvatarAccount from "../Avata";
import ModalDetailPost from "../ModalDetailPost";
import { SearchPostTypeForCard } from "@/service/searchService";
import { getTimeAgo } from "@/lib/utils";

const PostSearchItem = ({ post }: { post: SearchPostTypeForCard }) => {
  const [openDetailPost, setOpenDetailPost] = useState<boolean>(false);

  const handleShowDetailPost = () => {
    setOpenDetailPost(!openDetailPost);
  };
  return (
    <div
      className="flex justify-between gap-2 p-2 cursor-pointer"
      onClick={handleShowDetailPost}
    >
      {openDetailPost && (
        <ModalDetailPost id={post.id} showModal={handleShowDetailPost} />
      )}
      <div className="flex gap-3">
        <div className="w-[50px] h-[50px]">
          <AvatarAccount
            name={post.account.full_name}
            filePath={post.account.avata}
            height={50}
            width={50}
          />
        </div>

        <div className="flex flex-col">
          <Link
            href={`/profile/${post.account.id}`}
            className="truncate text-sm font-medium underline cursor-pointer"
          >
            {post.account.full_name}
          </Link>
          <p className="truncate text-base">{post.contentText}</p>
          <div className="flex gap-4">
            <span className="text-xs">{getTimeAgo(post.created_at)}</span>
            <p className="text-xs text-blue-600 underline cursor-pointer">
              Xem bài viết
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-[230px] rounded-md overflow-hidden">
        <Image
          src={
            "https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg"
          }
          fill
          alt="image post"
          className="absolute object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default PostSearchItem;
