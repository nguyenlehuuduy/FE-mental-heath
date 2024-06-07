import { getListValidPostByAccount } from "@/service/postService";
import {
  PostFeature,
  Advertisement,
  NavFeature,
  RecommendFeature,
  HotArea,
  RequestFollowerWrap,
} from "../../../../components";
import { getListHotFeature } from "@/service/featureService";
import { getListHotContent } from "@/service/hotContentService";
import { getAllSuggestFollowAccount } from "@/service/followService";
import { revalidateTag } from "next/cache";
import dynamic from "next/dynamic";
import { getAllPermissionPost } from "@/service/permissionPostService";

const DynamicPosts = dynamic(
  () => import("../../../../components/PostContent"),
  {
    ssr: false,
  },
);

export default async function Home() {
  revalidateTag("get-valid-post-cache");
  const listHotFeatureContent = await getListHotFeature();
  const listHotContent = await getListHotContent();
  const suggestFollow = await getAllSuggestFollowAccount();
  const listValidPostOfAccount = await getListValidPostByAccount();
  const listPermissionPost = await getAllPermissionPost();

  return (
    <div className="w-full flex justify-between gap-2">
      <div className="flex flex-col gap-1 pb-20 w-[68%]">
        <Advertisement />
        <PostFeature listPermissionPost={listPermissionPost ?? []} />
        <DynamicPosts listValidPost={listValidPostOfAccount?.data ?? []} />
      </div>
      <div className="w-[32%] flex gap-1 right-0">
        <div className="w-full flex flex-col gap-1 overflow-y-auto  h-[calc(100vh-60px)] sticky top-0">
          <NavFeature listHotFeatureContent={listHotFeatureContent ?? []} />
          <RecommendFeature suggestFollow={suggestFollow?.slice(0, 5) ?? []} />
          <RequestFollowerWrap />
          <HotArea listHotContent={listHotContent ?? []} />
        </div>
      </div>
    </div>
  );
}
