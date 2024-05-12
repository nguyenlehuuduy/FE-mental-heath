import { getLoginAccount } from "@/service/accountService";
import MySelfPageView from "./myself-page-view";
import {
  getListValidPostByAccount,
  getPostMyProfile,
} from "@/service/postService";

export default async function MySelfPage() {
  const profile = await getLoginAccount();
  const listValidPostOfAccount = await getPostMyProfile();
  return (
    <main className="w-full">
      <MySelfPageView
        profile={profile!}
        listValidPostOfAccount={listValidPostOfAccount!}
      />
    </main>
  );
}
