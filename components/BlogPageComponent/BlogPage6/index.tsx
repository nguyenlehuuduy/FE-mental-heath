import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="w-full h-[500px]">
      <div className="flex flex-col justify-center items-center">
        <div className="py-5">
          <p className="text-3xl font-semibold ">Danh sách tác giả</p>
        </div>
        <div className="grid grid-cols-3 gap-20 w-[1100px] h-[350px] py-5">
          <div className="flex justify-center items-center bg-[#D7EFFF] p-4 border rounded-[10px]">
            <div className="flex flex-col">
              <div className="flex relative aspect-video items-center justify-center py-2">
                <Image
                  className="object-contain"
                  width={130}
                  height={50}
                  alt="logo"
                  src={"/haiduong.svg"}
                />
              </div>
              <div className="">
                <p className="text-lg font-semibold text-[#0F52BA] text-center">
                Nguyễn Hải Dương
                </p>
                <p className="text-base font-thin text-center py-2">
                  Content Writer
                </p>
                <p className="text-center py-2">
                  <em>
                    &quot;Hạnh phúc không phải là điểm đến, mà là hành trình bạn
                    đang đi.&quot;
                  </em>
                </p>
              </div>
              <div className="flex flex-row gap-3 justify-center items-center py-2">
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/facebook.svg"}
                />
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/instagram.svg"}
                />
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/linkedin.svg"}
                />
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/twitter.svg"}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#D7EFFF] p-4 border rounded-[10px]">
            <div className="flex flex-col">
              <div className="flex relative aspect-video items-center justify-center py-2">
                <Image
                  className="object-contain"
                  width={130}
                  height={50}
                  alt="logo"
                  src={"/thuytrang.svg"}
                />
              </div>
              <div className="">
                <p className="text-lg font-semibold text-[#0F52BA] text-center">
                  Thùy Trang
                </p>
                <p className="text-base font-thin text-center py-2">
                  Content Writer
                </p>
                <p className="text-center py-2">
                  <em>
                    &quot;Khi bạn cảm thấy mệt mỏi, hãy nhớ rằng mọi cơn bão rồi cũng sẽ qua đi.&quot;
                  </em>
                </p>
              </div>
              <div className="flex flex-row gap-3 justify-center items-center py-2">
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/facebook.svg"}
                />
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/instagram.svg"}
                />
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/linkedin.svg"}
                />
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/twitter.svg"}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#D7EFFF] p-4 border rounded-[10px]">
            <div className="flex flex-col">
              <div className="flex relative aspect-video items-center justify-center py-2">
                <Image
                  className="object-contain"
                  width={130}
                  height={50}
                  alt="logo"
                  src={"/huuduy.svg"}
                />
              </div>
              <div className="">
                <p className="text-lg font-semibold text-[#0F52BA] text-center">
                  Nguyễn Lê Hữu Duy
                </p>
                <p className="text-base font-thin text-center py-2">
                  Content Writer
                </p>
                <p className="text-center py-2">
                  <em>
                    &quot;Hãy luôn tin tưởng rằng bạn đủ mạnh mẽ để vượt qua mọi
                    thử thách.&quot;
                  </em>
                </p>
              </div>
              <div className="flex flex-row gap-3 justify-center items-center py-2">
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/facebook.svg"}
                />
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/instagram.svg"}
                />
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/linkedin.svg"}
                />
                <Image
                  className="object-contain"
                  width={30}
                  height={30}
                  alt="logo"
                  src={"/twitter.svg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
