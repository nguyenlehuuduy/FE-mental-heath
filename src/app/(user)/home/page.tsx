import { getListValidPostByAccount } from "@/service/postService";
import {
  PostFeature,
  PostContent,
  Advertisement,
} from "../../../../components";

export default async function Home() {
  const listValidPostOfAccount = await getListValidPostByAccount();
  return (
    <div className="flex flex-col gap-1 pb-20">
      <Advertisement />
      <PostFeature />
      <PostContent listValidPostOfAccount={listValidPostOfAccount!} />
      <span className="text-center w-full block font-medium">
        Bạn đã xem hết tin ngày hôm nay
      </span>
    </div>
  );
}
