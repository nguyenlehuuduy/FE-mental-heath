import { Button } from "antd";
import Image from "next/image";

export default function FeatureArticle() {
  return (
    <div className="flex flex-col px-2  ">
      <div className="">
        <p className="text-3xl font-bold  py-2">Bài nổi bật</p>
        
      </div>
      <div className="py-7 ml-5 px-5">
        <Image
          className="object-contain"
          width={700} 
          height={400}
          alt="logo"
          src={"/featurearticle.svg"}
        />

        <div className="flex flex-row py-3">
          <p className="text-base font-bold ">Bởi</p>
          <p className="text-base font-bold  text-[#0F52BA] px-1"> Hữu Duy</p>
          <p className="px-1">|</p>
          <p className="px-2">23 - 05 - 2024</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold ">
            Giải thích về rối loạn sức khỏe tâm thần
          </p>
          <p className="text-base font-base text-[#6D6E76] mr-10">
            Tình trạng sức khỏe tâm thần thậm chí còn tồi tệ hơn ở các nước
            nghèo hoặc bất ổn, như Sierra Leone và Liberia, nơi xảy ra xung đột
            dân sự và thiên tai. Điều tồi tệ nhất là Sierra Leone là bệnh viện
            tâm thần tư nhân duy nhất.
          </p>
        </div>
        <div className="py-5">
          <Button
            htmlType="submit"
            className="text-white text-base font-semibold md:w-[200px] md:h-[45px] bg-[#0F52BA]  border border-solid border-[#0A68EB] "
          >
            Xem chi tiết {">"}
          </Button>
        </div>
      </div>
    </div>
  );
}
