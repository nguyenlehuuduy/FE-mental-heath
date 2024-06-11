import { Button } from "antd";
import Image from "next/image";

const BlogPage1 = () => {
  return (
    <div className="min-h-screen flex flex-row  py-10 px-20 ">
      <div className="flex w-[50%] items-center px-10 mt-10">
        <div className=" space-y-4">
          <p className="text-5xl font-bold  py-5">
            Chào mừng bạn đến với Blog GenZ Mental Health
          </p>
          <p className="text-lg font-thin  py-5">
            <em>
              &quot;Khám phá các bí quyết và phương pháp để duy trì sức khỏe
              tinh thần tốt, giúp bạn sống tích cực và hạnh phúc hơn mỗi
              ngày&quot;
            </em>
          </p>
          <div className="py-10">
            <Button
              htmlType="submit"
              className="text-white text-base font-semibold md:w-[250px] md:h-[45px] bg-[#0F52BA]  border border-solid border-[#0A68EB] "
            >
              Tìm hiểu thêm về chúng tôi  {'>'}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-[50%] items-center justify-end px-10">
        <Image
          className="object-contain"
          width={550}
          height={500}
          alt="logo"
          src={"/blog1.svg"}
        />
      </div>
    </div>
  );
};
export default BlogPage1;
