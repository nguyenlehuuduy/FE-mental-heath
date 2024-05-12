import { Button } from "antd";
import Image from "next/image";
import {
  IconAddFriend,
  IconContact,
  MessageBlueIcon,
  MessageIcon,
} from "../../../../../icons";
import { ProfileBanner } from "../../../../../components";
import { getProfile } from "@/service/accountService";
import { revalidateTag } from "next/cache";
import { unfollow } from "../../../../../components/RequestFollowers/action";

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

  return (
    <div className="w-full">
      <ProfileBanner
        infoAccount={InfoAccount}
        handleUnfollow={handleUnfollow}
      />
    </div>
  );
}
