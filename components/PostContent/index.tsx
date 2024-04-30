import { PostForCard } from "@/service/postService";
import { Input } from "antd";
import Image from "next/image";
import { Pagination } from "../../type";
import { Fragment } from "react";
import { abbreviateNumber, getTimeAgo } from "@/lib/utils";

type PropsComponent = {
  listValidPostOfAccount: { data: PostForCard[]; pagination: Pagination };
};
export default function PostContent(props: PropsComponent) {
  return (
    <Fragment>
      {props.listValidPostOfAccount.data.map((item) => (
        <div className="w-full bg-white rounded-md p-3" key={item.post_id}>
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
              <div className="flex gap-2 items-center font-medium">
                <Image
                  src="/love_icon.svg"
                  width={20}
                  height={20}
                  alt="icon save post"
                />
                <span className="opacity-70">
                  {abbreviateNumber(item.total_reaction)} thích
                </span>
              </div>
              <div className="flex gap-3 items-center font-medium">
                <Image
                  src="/comment_icon.svg"
                  width={20}
                  height={20}
                  alt="icon save post"
                />
                <span className="opacity-70">
                  {abbreviateNumber(item.total_comment)} bình luận
                </span>
              </div>
              <div className="flex gap-3 items-center font-medium">
                <Image
                  src="/share_icon.svg"
                  width={20}
                  height={20}
                  alt="icon save post"
                />
                <span className="opacity-70">
                  {abbreviateNumber(item.total_share)} chia sẻ
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex gap-4">
                <Image
                  src={item.account.avata}
                  width={40}
                  height={40}
                  alt="avata"
                  className="aspect-square w-[50px] h-auto object-contain rounded-xl"
                />

                <Input
                  placeholder="Viết bình luận của bạn"
                  className="h-[45px]"
                />
              </div>
              <span className="font-medium my-5 cursor-pointer">
                Tất cả bình luận
              </span>
              {item.comment_recent.map((it, index) => (
                <div className="flex gap-3 items-start mb-7" key={index}>
                  <Image
                    src={item.account.avata}
                    width={40}
                    height={40}
                    alt="avata"
                    className="aspect-square w-[50px] h-auto object-contain rounded-xl"
                  />

                  <div className="flex flex-col">
                    <p className="font-medium">{it.account.name}</p>
                    <span>{it.content}</span>
                    <div className="text-[14px] font-medium flex mt-2 gap-5">
                      <span>{getTimeAgo(it.created_at)}</span>
                      <span>Thích</span>
                      <span>Trả lời</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
