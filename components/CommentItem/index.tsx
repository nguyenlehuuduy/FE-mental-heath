import { getTimeAgo } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface CommentType {
  account: {
    id: string;
    name: string;
    nick_name: string;
    avata: string;
  };
  created_at: string;
  content: string;
}

const CommentItem = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="flex gap-3 items-start mb-7">
      <div className="relative w-[40px] h-[40px]">
        <Image
          src={comment.account.avata || "/123"}
          fill
          alt="avata"
          className="aspect-square rounded-xl"
        />
      </div>

      <div className="flex flex-col">
        <p className="font-medium">{comment.account.name}</p>
        <span>{comment.content}</span>
        <div className="text-[14px] font-medium flex mt-2 gap-5">
          <span>{getTimeAgo(comment.created_at)}</span>
          <span>Thích</span>
          <span>Trả lời</span>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
