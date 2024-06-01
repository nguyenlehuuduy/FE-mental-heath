import { getTimeAgo } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import AvatarAccount from "../Avata";

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
  const router = useRouter();
  const handleRedirectProfile = (id: string) => {
    router.push(`/profile/${id}`);
  };
  return (
    <div className="flex gap-3 items-start mb-7">
      <div
        onClick={() => handleRedirectProfile(comment.account.id)}
        className="relative w-[40px] h-[40px] cursor-pointer"
      >
        <AvatarAccount
          name={comment.account.name}
          filePath={comment.account.avata}
        />
      </div>

      <div className="flex flex-col">
        <p
          onClick={() => handleRedirectProfile(comment.account.id)}
          className="font-medium cursor-pointer"
        >
          {comment.account.name}
        </p>
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
