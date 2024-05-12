import { Button } from "antd";
import Image from "next/image";
import {
  IconAddFriend,
  IconContact,
  MessageBlueIcon,
  MessageIcon,
} from "../../../../../icons";
import {
  AccountContent,
  PostByAccount,
  ProfileBanner,
} from "../../../../../components";
import { getProfile } from "@/service/accountService";
import { revalidateTag } from "next/cache";
import { unfollow } from "../../../../../components/RequestFollowers/action";
import { PostForCard, getPostOtherAccount } from "@/service/postService";

export default async function ProfilePage({
  params,
}: {
  params: { accountId: string };
}) {
  revalidateTag("get-account-profile");
  const InfoAccount = await getProfile(params.accountId);

  const handleUnfollow = async (idFollow: string) => {
    "use server";
    const result = await unfollow(idFollow);
    if (result) {
      revalidateTag("get-account-profile");
    }
  };

  const getPostsByAccount = await getPostOtherAccount(params.accountId);

  return (
    <div className="w-full">
      <ProfileBanner
        infoAccount={InfoAccount}
        handleUnfollow={handleUnfollow}
      />
      <AccountContent
        idAccount={params.accountId}
        listValidPostOfAccount={getPostsByAccount!}
      />
    </div>
  );
}
