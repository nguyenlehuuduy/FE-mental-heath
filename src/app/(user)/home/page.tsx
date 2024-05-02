import { getListValidPostByAccount } from "@/service/postService";
import {
  PostFeature,
  PostContent,
  Advertisement,
} from "../../../../components";
import { getLoginAccount } from "@/service/accountService";

export default async function Home() {
  const listValidPostOfAccount = await getListValidPostByAccount();
  const profile = await getLoginAccount();
  return (
    <div className="flex flex-col gap-1 pb-20">
      <Advertisement />
      <PostFeature profile={profile!} />
      <PostContent
        profile={profile!}
        listValidPostOfAccount={listValidPostOfAccount!}
      />
      <span className="text-center w-full block font-medium">
        Bạn đã xem hết tin ngày hôm nay
      </span>
    </div>
  );
}
