import { getLoginAccount } from "@/service/accountService";
import MySelfPageView from "./myself-page-view";
import { getListValidPostByAccount } from "@/service/postService";

export default async function MySelfPage() {
  const profile = await getLoginAccount();
  //TODO_1549542024: DONT HAVE API TO GET ALL POST BY ACCOUNT ID
  const listValidPostOfAccount = await getListValidPostByAccount();
  return (
    <main className="w-full">
      <MySelfPageView
        profile={profile!}
        listValidPostOfAccount={listValidPostOfAccount!}
      />
    </main>
  );
}
