import { getDetailMyselfAccount } from "@/service/accountService";
import MySelfPageView from "./myself-page-view";
import { getPostMyProfile } from "@/service/postService";
import { notFound } from "next/navigation";
import { getAllImagePublicByMyself } from "@/service/imageService";

export default async function MySelfPage() {
  const profile = await getDetailMyselfAccount();
  const listValidPostOfAccount = await getPostMyProfile();
  const listImagePost = await getAllImagePublicByMyself();
  if (!profile) {
    notFound();
  }
  return (
    <main className="w-full">
      <MySelfPageView
        listImagePost={listImagePost ?? []}
        profile={profile}
        listValidPostOfAccount={listValidPostOfAccount ?? []}
      />
    </main>
  );
}
