import { Carousel } from "antd";
import Image from "next/image";

export default function BlogPage4() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-3xl py-5">Chọn một danh mục</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 py-5">
        <div className="w-[300px] h-[210px] border-[1px] rounded-xl relative hover:bg-[#D7EFFF] transition duration-300">
          <div className=" px-7 gap-5">
            <div className="relative flex items-start justify-start py-5 ">
              <Image
                className="object-contain"
                width={48}
                height={48}
                alt="logo"
                src={"/blue.svg"}
              />

              <div className="absolute top-7 left-2">
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/playicon.svg"}
                />
              </div>
            </div>
            <p className=" font-semibold  text-xl">Lòng tự trọng</p>
            <p className=" text-base py-2">
              Học cách xây dựng và duy trì lòng tự trọng là nền tảng để bạn cảm
              thấy hài lòng ....
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[210px] border-[1px] rounded-xl relative hover:bg-[#D7EFFF] transition duration-300">
          <div className=" px-7 gap-5">
            <div className="relative flex items-start justify-start py-5 ">
              <Image
                className="object-contain"
                width={48}
                height={48}
                alt="logo"
                src={"/blue.svg"}
              />

              <div className="absolute top-7 left-2">
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/pauseicon.svg"}
                />
              </div>
            </div>
            <p className=" font-semibold  text-xl">Bản thân</p>
            <p className=" text-base py-2">
              Hiểu rõ và chấp nhận bản thân là bước đầu tiên để phát triển cá
              nhân.
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[210px] border-[1px] rounded-xl relative hover:bg-[#D7EFFF] transition duration-300">
          <div className=" px-7 gap-5">
            <div className="relative flex items-start justify-start py-5 ">
              <Image
                className="object-contain"
                width={48}
                height={48}
                alt="logo"
                src={"/blue.svg"}
              />

              <div className="absolute top-7 left-2">
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/nexticon.svg"}
                />
              </div>
            </div>
            <p className=" font-semibold  text-xl">Các mối quan hệ</p>
            <p className=" text-base py-2">
              Các mối quan hệ tốt đẹp là yếu tố quan trọng để có một cuộc sống
              hạnh phúc và cân bằng.
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[210px] border-[1px] rounded-xl relative hover:bg-[#D7EFFF] transition duration-300">
          <div className=" px-7 gap-5">
            <div className="relative flex items-start justify-start py-5 ">
              <Image
                className="object-contain"
                width={48}
                height={48}
                alt="logo"
                src={"/blue.svg"}
              />

              <div className="absolute top-7 left-2">
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/gifticon.svg"}
                />
              </div>
            </div>
            <p className=" font-semibold  text-xl">Sức khỏe tinh thần</p>
            <p className=" text-base py-2">
              Sức khỏe tinh thần là trạng thái cân bằng giữa tâm trí, cảm xúc và
              tinh thần.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
