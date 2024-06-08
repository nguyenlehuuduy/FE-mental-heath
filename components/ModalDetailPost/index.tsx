"use client";

import { abbreviateNumber, formatDate, getTimeAgo } from "@/lib/utils";
import { Input, Modal, Image as ImageAnt, Button } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AvatarAccount from "../Avata";
import { SendIcon } from "../../icons";
import CommentItem from "../CommentItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { PostForCard } from "@/service/postService";
import { CommentForCard } from "@/service/commentService";
import { getAllCommentOfPost } from "./action";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  showModal: () => void;
  isLike?: boolean;
  handleLikePost: () => void;
  totalLike: number;
  totalComment: number;
  commentContent: string;
  handleCommentChange: (content: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleCommentPost: () => void;
  infoBasePost: PostForCard;
}

async function getPostForModal(
  idPost: string,
): Promise<Array<CommentForCard> | undefined> {
  try {
    return await getAllCommentOfPost(idPost);
  } catch (error) {
    return;
  }
}

export default function ModalDetailPost(props: Props) {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const [listComment, setListComment] = useState<Array<CommentForCard>>();
  const router = useRouter();

  useEffect(() => {
    getPostForModal(props.infoBasePost.post_id).then((rs) => {
      if (rs) {
        setListComment(rs);
      }
    });
  }, [props]);

  const onHandleCommentPost = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (e) {
      props.handleKeyPress(e);
    }
    if (e?.key === "Enter") {
      listComment &&
        setListComment([
          {
            account: {
              avata: currentUser?.avata ?? "",
              id: currentUser?.id ?? "",
              name: currentUser?.full_name ?? "",
              nick_name: currentUser?.nick_name ?? "",
            },
            content: props.commentContent,
            created_at: formatDate(Date(), "DD-MM-YYYY"),
          },
          ...listComment,
        ]);
    }
  };

  return (
    <Modal
      title="Bài đăng"
      open={true}
      style={{ top: 20 }}
      width={720}
      onCancel={props.showModal}
      footer={null}
      className="title-modal h-screen overflow-y-auto bg-white rounded-md"
    >
      <div className="w-full mb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center min-w-[200px] gap-4 rounded-sm">
            <AvatarAccount
              filePath={props.infoBasePost?.account.avata}
              name={props.infoBasePost?.account.name ?? ""}
            />

            <div>
              <p className="font-bold">{props.infoBasePost?.account.name}</p>
              <span>{getTimeAgo(props.infoBasePost?.created_at ?? "")}</span>
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
            <Button
              onClick={() =>
                router.push(`/new-feeds/${props.infoBasePost.post_id}`)
              }
            >
              xem toàn màn hình
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        <span className="whitespace-pre-wrap">
          {props.infoBasePost?.content_text}
        </span>
        <div className="w-full h-[400px] flex mb-3 gap-3">
          <ImageAnt.PreviewGroup>
            {props.infoBasePost?.image_post.map((image, index) => (
              <div
                key={index}
                className={`relative flex justify-center items-center h-full w-full overflow-hidden`}
              >
                <ImageAnt
                  src={image}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
          </ImageAnt.PreviewGroup>
        </div>

        <div className="flex items-center justify-evenly">
          <button
            onClick={props.handleLikePost}
            className="flex gap-2 items-center font-medium cursor-pointer"
          >
            {props.isLike ? (
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
              {props.totalLike && abbreviateNumber(props.totalLike)} Thích
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
              {props.totalComment && abbreviateNumber(props.totalComment)} Bình
              luận
            </span>
          </div>
          <div className="flex gap-3 items-center font-medium cursor-pointer">
            <Image
              src="/share_icon.svg"
              width={20}
              height={20}
              alt="icon save post"
            />
            {/* TODO: update share later */}
            <span className="opacity-70">0 Chia sẻ</span>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="relative flex gap-4 ">
            <div className="relative w-[40px] h-[40px]">
              <AvatarAccount
                filePath={currentUser?.avata}
                name={currentUser?.full_name ?? " "}
              />
            </div>

            <Input
              type="text"
              value={props.commentContent}
              onChange={(e) => props.handleCommentChange(e.target.value)}
              onKeyDown={onHandleCommentPost}
              placeholder="Viết bình luận của bạn"
              className="h-[45px]"
            />
            <div
              onClick={() => onHandleCommentPost()}
              className="flex items-center cursor-pointer"
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                <SendIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-4">
            {listComment &&
              listComment.map((it, index) => (
                <CommentItem comment={it} key={index} />
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
