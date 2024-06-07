"use client";

import { abbreviateNumber, formatDate, getTimeAgo } from "@/lib/utils";
import { PostForCard } from "@/service/postService";
import { Input } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import CommentItem from "../CommentItem";
import { comment, like } from "./action";
import { SendIcon } from "../../icons";
import AvatarAccount from "../Avata";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { useRouter } from "next/navigation";
import { PERMISSION_POST } from "@/lib/constants";

const PostCard = ({ item }: { item: PostForCard }) => {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const [commentContent, setCommentContent] = useState<string>("");
  const [isLike, setIsLike] = useState<boolean>(item.is_like);
  const [totalLike, setTotalLike] = useState<number>(item.total_reaction || 0);
  const [totalComment, setTotalComment] = useState<number>(
    item.total_comment ?? 0,
  );
  const [permissionPost, setPermissionPost] = useState<string>(
    item.permission_post?.id ?? PERMISSION_POST.PRIVATE,
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

  const RenderIconPermissionPost = () =>
    (permissionPost === PERMISSION_POST.PUBLIC && (
      <Image
        src="/public_icon.svg"
        width={16}
        height={16}
        alt="icon save post"
      />
    )) ||
    (permissionPost === PERMISSION_POST.FOLLOW && (
      <Image
        src="/friend_icon.svg"
        width={16}
        height={16}
        alt="icon save post"
      />
    )) ||
    (permissionPost === PERMISSION_POST.PRIVATE && (
      <Image
        src="/private_icon.svg"
        width={16}
        height={16}
        alt="icon save post"
      />
    ));

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };

  const handleLikePost = async (idPost: string) => {
    isLike ? setTotalLike(totalLike - 1) : setTotalLike(totalLike + 1);
    await setIsLike(!isLike);
    like(idPost);
  };

  const handleCommentPost = async (idPost: string, commentContent: string) => {
    currentUser?.id && (await comment(idPost, currentUser.id, commentContent));
    setTotalComment(totalComment + 1);
    setRecentComment([
      {
        content: commentContent,
        account: {
          avata: currentUser?.avata ?? "",
          id: currentUser?.id ?? "",
          name: currentUser?.full_name ?? "",
          nick_name: currentUser?.nick_name ?? "",
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

  const router = useRouter();

  const handleNavigateProfile = (idAccount: string) => {
    router.push(`/profile/${idAccount}`);
  };

  return (
    <div className="w-full bg-white rounded-md p-3 mb-2">
      <div className="flex items-center justify-between">
        <div
          onClick={() => handleNavigateProfile(item.account.id)}
          className="flex items-center min-w-[200px] gap-4 rounded-sm cursor-pointer"
        >
          <AvatarAccount
            filePath={item.account.avata}
            name={item.account.name}
          />

          <div>
            <p className="font-bold">{item.account.name}</p>
            <div className="flex gap-3 items-center">
              <span>{getTimeAgo(item.created_at)}</span>
              <div className="flex gap-2 items-center">
                <RenderIconPermissionPost />
                <span>{item.permission_post?.code ?? "riêng tư"}</span>
              </div>
            </div>
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
              className={`relative h-auto p-2 ${
                item.image_post.length === 1
                  ? "w-full"
                  : item.image_post.length === 2
                    ? "w-1/2"
                    : item.image_post.length === 3
                      ? "w-1/3"
                      : "w-1/4"
              } rounded-md overflow-hidden`}
            >
              <Image
                key={index}
                src={image}
                fill
                quality={100}
                alt="avata"
                objectFit="cover"
                objectPosition="50% 50%"
                className="rounded-md"
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
              <AvatarAccount
                filePath={currentUser?.avata}
                name={currentUser?.full_name ?? "D"}
              />
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
