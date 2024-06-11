import { Button } from "antd";

export default function BlogPage7() {
  return (
    <div className=" w-[700px] flex flex-col mx-auto py-5 items-center justify-center">
      <div className="flex flex-col gap-10 items-center justify-center">
        <p className="text-3xl font-bold text-center">
          Tham gia nhóm của chúng tôi để trở thành một phần trong câu chuyện của
          chúng tôi
        </p>
        <Button className="px-4 py-2 bg-[#0F52BA] w-[220px] h-[50px] text-[#FFFFFF] text-lg font-semibold">
        Tham gia ngay
          </Button>
      </div>
    </div>
  );
}
