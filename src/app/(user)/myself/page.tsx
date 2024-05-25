import { getDetailMyselfAccount } from "@/service/accountService";
import MySelfPageView from "./myself-page-view";
import {
  getPostMyProfile,
} from "@/service/postService";
import { notFound } from "next/navigation";

export default async function MySelfPage() {
  const profile = await getDetailMyselfAccount();
  const listValidPostOfAccount = await getPostMyProfile();
  if (!profile) {
    notFound()
  }
  return (
    <main className="w-full">
      <MySelfPageView
        profile={profile}
        listValidPostOfAccount={listValidPostOfAccount ?? []}
      />
    </main>
  );
}
