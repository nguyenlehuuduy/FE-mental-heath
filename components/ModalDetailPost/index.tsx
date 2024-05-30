"use client";

import { abbreviateNumber, formatDate, getTimeAgo } from "@/lib/utils";
import { Input, Modal, Image as ImageAnt } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AvatarAccount from "../Avata";
import { SendIcon } from "../../icons";
import { postDetail } from "./action";
import { PostForCard } from "@/service/postService";
import CommentItem from "../CommentItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { comment } from "../PostCard/action";

interface Props {
  id: string;
  showModal: () => void;
}

const ModalDetailPost = (props: Props) => {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const [infoPost, setInfoPost] = useState<PostForCard>();
  const [totalLike, setTotalLike] = useState<number>(0);
  const [totalComment, setTotalComment] = useState<number>(0);
  const [commentContent, setCommentContent] = useState<string>("");
  const [listComment, setListComment] = useState<
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
  >();

  const getPostForModal = async () => {
    const res = await postDetail(props.id);
    setInfoPost(res);
    setTotalLike(res.total_reaction);
    setTotalComment(res.total_comment);
    setListComment(res.comment_recent);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommentPost(props.id, commentContent);
    }
  };

  const handleCommentPost = async (idPost: string, commentContent: string) => {
    currentUser?.id && (await comment(idPost, currentUser.id, commentContent));
    console.log("vao comment");

    setTotalComment(totalComment + 1);
    setListComment([
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
      ...listComment!,
    ]);
    setCommentContent("");
  };

  useEffect(() => {
    getPostForModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  return (
    <Modal
      title="Bài đăng"
      open={true}
      style={{ top: 20 }}
      width={720}
      onCancel={props.showModal}
      footer={null}
      className="title-modal"
    >
      <div className="w-full bg-white rounded-md mb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center min-w-[200px] gap-4 rounded-sm">
            <AvatarAccount
              filePath={infoPost?.account.avata}
              name={infoPost?.account.name ?? ""}
            />

            <div>
              <p className="font-bold">{infoPost?.account.name}</p>
              <span>{getTimeAgo(infoPost?.created_at ?? "")}</span>
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
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        <span className="whitespace-pre-wrap">{infoPost?.content_text}</span>
        <div className="w-full h-[400px] flex mb-3 gap-3">
          <ImageAnt.PreviewGroup>
            {infoPost?.image_post.map((image, index) => (
              <div
                key={index}
                className={`relative flex justify-center items-center h-full w-full  rounded-md overflow-hidden `}
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
            // onClick={() => handleLikePost(item.post_id)}
            className="flex gap-2 items-center font-medium cursor-pointer"
          >
            {/* {isLike ? ( */}
            <Image
              src="/loved_icon.svg"
              width={20}
              height={20}
              alt="icon save post"
            />
            {/* ) : (
              <Image
                src="/love_icon.svg"
                width={20}
                height={20}
                alt="icon save post"
              /> */}
            {/* )} */}
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
              {infoPost?.total_share
                ? abbreviateNumber(infoPost.total_share)
                : 0}{" "}
              Chia sẻ
            </span>
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
              value={commentContent}
              onChange={handleCommentChange}
              onKeyDown={handleKeyPress}
              placeholder="Viết bình luận của bạn"
              className="h-[45px]"
            />
            <div
              onClick={() => handleCommentPost(props.id, commentContent)}
              className="flex items-center cursor-pointer"
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                <SendIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-4 max-h-[250px] overflow-y-auto">
            {listComment &&
              listComment.map((it, index) => (
                <CommentItem comment={it} key={index} />
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetailPost;
