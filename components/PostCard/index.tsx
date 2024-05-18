"use client";

import { abbreviateNumber, formatDate, getTimeAgo } from "@/lib/utils";
import { PostForCard } from "@/service/postService";
import { Avatar, Input } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import CommentItem from "../CommentItem";
import { comment, like } from "./action";
import { SendIcon } from "../../icons";
import { MyselfForCard } from "@/service/accountService";
import AvatarAccount from "../Avata";

const PostCard = ({
  item,
  accountInf,
}: {
  item: PostForCard;
  accountInf: MyselfForCard;
}) => {
  const [commentContent, setCommentContent] = useState<string>("");
  const [isLike, setIsLike] = useState<boolean>(item.is_like);
  const [totalLike, setTotalLike] = useState<number>(item.total_reaction || 0);
  const [totalComment, setTotalComment] = useState<number>(
    item.total_comment ?? 0,
  );
  const [recentComment, setRecentComment] = useState<
    Array<{
      account: {
        id: string;
        name: string;
        nick_name: string;
        avata: string;
      };
      created_at: string;
      content: string;
    }>
  >(item.comment_recent);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };

  const handleLikePost = async (idPost: string) => {
    isLike ? setTotalLike(totalLike - 1) : setTotalLike(totalLike + 1);
    await setIsLike(!isLike);
    like(idPost);
  };

  const handleCommentPost = async (idPost: string, commentContent: string) => {
    accountInf?.id && (await comment(idPost, accountInf.id, commentContent));
    setTotalComment(totalComment + 1);
    setRecentComment([
      {
        content: commentContent,
        account: {
          avata: accountInf?.avata ?? "",
          id: accountInf?.id ?? "",
          name: accountInf?.full_name ?? "",
          nick_name: accountInf?.nick_name ?? "",
        },
        created_at: formatDate(Date(), "DD-MM-YYYY"),
      },
      ...recentComment,
    ]);
    setCommentContent("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommentPost(item.post_id, commentContent);
    }
  };

  return (
    <div className="w-full bg-white rounded-md p-3 mb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center min-w-[200px] gap-4 rounded-sm">
          <AvatarAccount
            filePath={item.account.avata}
            name={item.account.name}
          />

          <div>
            <p className="font-bold">{item.account.name}</p>
            <span>{getTimeAgo(item.created_at)}</span>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <Image
            src="/save_icon.svg"
            width={14}
            height={14}
            alt="icon save post"
          />
          <Image
            src="/more_icon.svg"
            width={14}
            height={14}
            alt="icon save post"
          />
          <Image
            src="/cancel_icon.svg"
            width={14}
            height={14}
            alt="icon save post"
          />
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        <span className="whitespace-pre-wrap">{item.content_text}</span>
        <div className="w-full h-[400px] flex mb-3 gap-3">
          {item.image_post.map((image, index) => (
            <div
              key={index}
              className={`relative  h-full ${item.image_post.length === 1 ? "w-full" : "w-1/2"}  rounded-md overflow-hidden `}
            >
              <Image
                key={index}
                src={image}
                width={500}
                height={500}
                alt="avata"
                className="absolute object-contain h-auto w-full rounded-md -p-5"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-evenly">
          <button
            onClick={() => handleLikePost(item.post_id)}
            className="flex gap-2 items-center font-medium cursor-pointer"
          >
            {isLike ? (
              <Image
                src="/loved_icon.svg"
                width={20}
                height={20}
                alt="icon save post"
              />
            ) : (
              <Image
                src="/love_icon.svg"
                width={20}
                height={20}
                alt="icon save post"
              />
            )}
            <span className="opacity-70">
              {totalLike && abbreviateNumber(totalLike)} Thích
            </span>
          </button>
          <div className="flex gap-3 items-center font-medium cursor-pointer">
            <Image
              src="/comment_icon.svg"
              width={20}
              height={20}
              alt="icon save post"
            />
            <span className="opacity-70">
              {totalComment && abbreviateNumber(totalComment)} Bình luận
            </span>
          </div>
          <div className="flex gap-3 items-center font-medium cursor-pointer">
            <Image
              src="/share_icon.svg"
              width={20}
              height={20}
              alt="icon save post"
            />
            <span className="opacity-70">
              {item.total_share ? abbreviateNumber(item.total_share) : 0} Chia
              sẻ
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="relative flex gap-4 ">
            <div className="relative w-[40px] h-[40px]">
              {accountInf?.avata ? (
                <Image
                  src={accountInf?.avata}
                  fill
                  objectFit="cover"
                  alt="avata"
                  className="aspect-square w-[50px] h-auto rounded-xl"
                />
              ) : (
                <Image
                  src="https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp"
                  fill
                  objectFit="cover"
                  alt="avata"
                  className="aspect-square w-[50px] h-auto rounded-xl"
                />
              )}
            </div>

            <Input
              type="text"
              value={commentContent}
              onChange={handleCommentChange}
              onKeyDown={handleKeyPress}
              placeholder="Viết bình luận của bạn"
              className="h-[45px]"
            />
            <div
              onClick={() => handleCommentPost(item.post_id, commentContent)}
              className="flex items-center cursor-pointer"
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                <SendIcon />
              </div>
            </div>
          </div>
          {item.comment_recent && (
            <span className="font-medium my-5 cursor-pointer">
              Tất cả bình luận
            </span>
          )}
          {recentComment.map((it, index) => (
            <CommentItem comment={it} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
