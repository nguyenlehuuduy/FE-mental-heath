"use client";

import { PostDetailForCard } from "@/service/postService";
import { AvatarAccount, CommentItem } from "../../../../../components";
import { abbreviateNumber, formatDate, getTimeAgo } from "@/lib/utils";
import Image from "next/image";
import { Input, Image as ImageAnt, Button } from "antd";
import { SendIcon } from "../../../../../icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/configureStore";
import { useState } from "react";
import { PERMISSION_POST } from "@/lib/constants";
import { CommentForCard } from "@/service/commentService";
import { comment, like } from "../../../../../components/PostCard/action";
import Link from "next/link";
import { BackSquare } from "iconsax-react";
import { useRouter } from "next/navigation";

type PropsComponent = {
  detailPost: PostDetailForCard;
};

export default function DetailNewFeedPageView(props: PropsComponent) {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const [commentContent, setCommentContent] = useState<string>("");
  const [isLike, setIsLike] = useState<boolean>(props.detailPost.is_like);
  const [totalLike, setTotalLike] = useState<number>(
    props.detailPost.total_reaction || 0,
  );
  const [totalComment, setTotalComment] = useState<number>(
    props.detailPost.total_comment ?? 0,
  );
  const [permissionPost, setPermissionPost] = useState<string>(
    props.detailPost.permission_post?.id ?? PERMISSION_POST.PRIVATE,
  );

  const router = useRouter();

  const [allComment, setAllComment] = useState<Array<CommentForCard>>(
    props.detailPost.all_comment,
  );

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
    setIsLike(!isLike);
    await like(idPost);
  };

  const handleCommentPost = async (idPost: string, commentContent: string) => {
    currentUser?.id && (await comment(idPost, currentUser.id, commentContent));
    setTotalComment(totalComment + 1);
    setAllComment([
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
      ...allComment,
    ]);
    setCommentContent("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommentPost(props.detailPost.post_id, commentContent);
    }
  };

  return (
    <div className="w-full flex justify-between">
      <div className="w-[70%] rounded-md bg-white p-3 h-[calc(100vh-70px)] overflow-y-auto">
        <Button
          className="mb-3 items-center flex"
          icon={<BackSquare />}
          onClick={() => router.back()}
        >
          <p>Quay lại</p>
        </Button>
        <div className="w-full mb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center min-w-[200px] gap-4 rounded-sm">
              <AvatarAccount
                filePath={props.detailPost?.account.avata}
                name={props.detailPost?.account.name ?? ""}
              />

              <div>
                <Link
                  href={`/profile/${props.detailPost.account.id}`}
                  className="font-bold  hover:underline"
                >
                  {props.detailPost.account.name}
                </Link>
                <div className="flex gap-3 items-center">
                  <span>{getTimeAgo(props.detailPost?.created_at ?? "")}</span>

                  <div className="flex gap-2 items-center">
                    <RenderIconPermissionPost />
                    <span>
                      {props.detailPost.permission_post?.code ?? "riêng tư"}
                    </span>
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
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-4">
          <span className="whitespace-pre-wrap">
            {props.detailPost?.content_text}
          </span>
          <div className="w-full h-[400px] flex mb-3 gap-3">
            <ImageAnt.PreviewGroup>
              {props.detailPost?.image_post.map((image, index) => (
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
              onClick={() => handleLikePost(props.detailPost.post_id)}
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
              {/* TODO: update share later */}
              <span className="opacity-70">0 Chia sẻ</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[29%]  flex flex-col gap-3">
        <div className="flex flex-col h-[calc(100vh-130px)] overflow-y-auto p-3 rounded-md bg-white">
          <span className="pb-7">Tất cả bình luận</span>
          {allComment.map((it, index) => (
            <CommentItem comment={it} key={index} />
          ))}
        </div>

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
            onChange={(e) => handleCommentChange(e)}
            onKeyDown={handleKeyPress}
            placeholder="Viết bình luận của bạn"
            className="h-[45px]"
          />
          <div
            onClick={() =>
              handleCommentPost(props.detailPost.post_id, commentContent)
            }
            className="flex items-center cursor-pointer"
          >
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
