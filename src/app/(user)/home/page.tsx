import { getListValidPostByAccount } from "@/service/postService";
import {
  PostFeature,
  PostContent,
  Advertisement,
  NavFeature,
  RecommendFeature,
  HotArea,
} from "../../../../components";
import { getLoginAccount } from "@/service/accountService";
import { getListHotFeature } from "@/service/featureService";
import { getListHotContent } from "@/service/hotContentService";
import { getAllSuggestFollowAccount } from "@/service/followService";

export default async function Home() {
  const listHotFeatureContent = await getListHotFeature();
  const listHotContent = await getListHotContent();
  const suggestFollow = await getAllSuggestFollowAccount();
  const listValidPostOfAccount = await getListValidPostByAccount();
  const profile = await getLoginAccount();
  return (
    <div className="w-full flex justify-between gap-2">
      <div className="flex flex-col gap-1 pb-20 w-[68%]">
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
      <div className="w-[32%] flex gap-1 right-0">
        <div className="w-full flex flex-col gap-1 overflow-y-auto  h-[calc(100vh-60px)] sticky top-0">
          <NavFeature listHotFeatureContent={listHotFeatureContent ?? []} />
          <RecommendFeature suggestFollow={suggestFollow?.slice(0, 5) ?? []} />
          <HotArea listHotContent={listHotContent ?? []} />
        </div>
      </div>
    </div>
  );
}
