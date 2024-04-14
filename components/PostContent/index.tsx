import { Input } from "antd";
import Image from "next/image";

const MockData = {
  avata: "/nav_feature.png",
  name: "Nguyễn Lê Hưu Duy",
  createAt: "30 phút trước",
  title: `Tram cåm trong thé hé GenZ khöng chi lå mét vän dB cå nhån må cön lå mét vän dé
  xä höi dång quan ngai. ép IWC tir xä höi, cöng nghé, vå nhüng Io ngai vb tucng
  lai, nhibu thanh nién GenZ dang phåi d6i mät v6i tinh trang tram cåm. SV vong
  tir gia dinh, åp lvc hoc tap, vå sv so sånh khöng lånh manh trén mang xä höi khién
  ho cåm thäy bi bé buöc vå cö don....Dé giåi quyét vän dé nåy, can cé sq' hö trq tir cå
  gia dinh, cong dbng vå Chinh phi. Cåi thién hé th6ng chäm soc s(rc khåe tåm thin
  vå täng cu'öng giåo duc vb sirc khåe tåm thin tir khi cön tré lå rät cin thiét.`,
  imageContent: "/nav_feature.png",
  totalLike: "14.5",
  totalComment: "123",
  totleShare: "21",
  recentComment: [
    {
      nameAccount: "Nguyễn Hải Dương",
      avata: "/nav_feature.png",
      content:
        "Cuộc Đời thật lắm chông gai, If you’ve disabled Preflight in your project, you’ll need to include a border style utility any time you use one of the border-width utilities for the border to actually take effect:",
      createAt: "5 phút",
    },
    {
      nameAccount: "Nguyễn Hải Dương",
      avata: "/nav_feature.png",
      content:
        "Cuộc Đời thật lắm chông gai, If you’ve disabled Preflight in your project, you’ll need to include a border style utility any time you use one of the border-width utilities for the border to actually take effect:",
      createAt: "5 phút",
    },
    {
      nameAccount: "Nguyễn Hải Dương",
      avata: "/nav_feature.png",
      content:
        "Cuộc Đời thật lắm chông gai, If you’ve disabled Preflight in your project, you’ll need to include a border style utility any time you use one of the border-width utilities for the border to actually take effect:",
      createAt: "5 phút",
    },
  ],
};
export default function PostContent() {
  return (
    <div className="w-full pb-10 bg-white p-4 rounded-sm mt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center min-w-[200px] gap-4 rounded-sm">
          <Image
            src={MockData.avata}
            width={40}
            height={40}
            alt="avata"
            className="rounded-[50%]"
          />
          <div>
            <p className="font-bold">{MockData.name}</p>
            <span>{MockData.createAt}</span>
          </div>
        </div>

        <div className="flex gap-3">
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
      <div className="mt-3 flex flex-col gap-3">
        <span>{MockData.title}</span>
        <Image
          src={MockData.imageContent}
          width={500}
          height={500}
          alt="avata"
          className="object-contain w-full aspect-video"
        />
        <div className="flex items-center justify-evenly p-5 border-b-[1px]">
          <div className="flex gap-3 items-center font-medium">
            <Image
              src="/love_icon.svg"
              width={23}
              height={23}
              alt="icon save post"
            />
            <span className="opacity-70">{MockData.totalLike} thích</span>
          </div>
          <div className="flex gap-3 items-center font-medium">
            <Image
              src="/comment_icon.svg"
              width={23}
              height={23}
              alt="icon save post"
            />
            <span className="opacity-70">
              {MockData.totalComment} nình luận
            </span>
          </div>
          <div className="flex gap-3 items-center font-medium">
            <Image
              src="/share_icon.svg"
              width={23}
              height={23}
              alt="icon save post"
            />
            <span className="opacity-70">{MockData.totleShare} chia sẻ</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <Image
              src={MockData.imageContent}
              width={40}
              height={40}
              alt="avata"
              className="aspect-square w-[50px] h-auto object-contain rounded-xl"
            />

            <Input placeholder="Viết bình luận của bạn" className="h-[54px]" />
          </div>
          <span className="font-medium my-5 cursor-pointer">
            Tất cả bình luận
          </span>
          {MockData.recentComment.map((item, index) => (
            <div className="flex gap-3 items-start mb-7" key={index}>
              <Image
                src={item.avata}
                width={40}
                height={40}
                alt="avata"
                className="aspect-square w-[50px] h-auto object-contain rounded-xl"
              />

              <div className="flex flex-col">
                <p className="font-medium">{item.nameAccount}</p>
                <span>{item.content}</span>
                <div className="text-[14px] font-medium flex gap-5">
                  <span>{item.createAt}</span>
                  <span>Thích</span>
                  <span>Trả lời</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
