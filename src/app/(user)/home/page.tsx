import { PostContent } from "../../../../components";

export default function Home() {
  return (
    <div className="pb-20">
      <PostContent />
      <span className="text-center w-full block font-medium">
        Bạn đã xem hết tin ngày hôm nay
      </span>
    </div>
  );
}
