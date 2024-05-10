"use client";

import { abbreviateNumber, getTimeAgo } from "@/lib/utils";
import { PostForCard } from "@/service/postService";
import { Input } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import CommentItem from "../CommentItem";
import { setCommentPost, setLikePost } from "../../redux/actions/post";
import { comment, like } from "./action";
import { SendIcon } from "../../icons";

const PostCard = ({ item }: { item: PostForCard }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [commentContent, setCommentContent] = useState<string>("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };

  const handleLikePost = async (idPost: string) => {
    dispatch(setLikePost(idPost));
    const resultLike = await like(idPost);
    if (!resultLike) {
      dispatch(setLikePost(idPost));
    }
  };

  const handleCommentPost = async (idPost: string, commentContent: string) => {
    const resultComment = await comment(idPost, commentContent);
    if (resultComment) {
      dispatch(
        setCommentPost({
          postId: item.post_id,
          comment: commentContent,
          user: {
            id: user?.id,
            full_name: user?.full_name,
            nick_name: user?.nick_name,
            avata: user?.avata,
          },
        }),
        setCommentContent(""),
      );
    }
  };

  return (
    <div className="w-full bg-white rounded-md p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center min-w-[200px] gap-4 rounded-sm">
          <Image
            src={item.account.avata}
            width={45}
            height={45}
            alt="avata"
            className="rounded-[50%]"
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
      <div className="mt-3 flex flex-col">
        <span>{item.content_text}</span>
        <Image
          src={item.image_post[0]}
          width={500}
          height={500}
          alt="avata"
          className="object-contain w-full h-auto aspect-video"
        />
        <div className="flex items-center justify-evenly">
          <button
            onClick={() => handleLikePost(item.post_id)}
            className="flex gap-2 items-center font-medium cursor-pointer"
          >
            {item.is_like ? (
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
              {item.total_reaction ? abbreviateNumber(item.total_reaction) : 0}{" "}
              Thích
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
              {item.total_comment ? abbreviateNumber(item.total_comment) : 0}{" "}
              Bình luận
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
              {user?.avata ? (
                <Image
                  src={user?.avata}
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
          {item.comment_recent &&
            item.comment_recent.map((it, index) => (
              <CommentItem comment={it} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
