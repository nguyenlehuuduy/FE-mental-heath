import { PostForCard } from "@/service/postService";
import React, { useState } from "react";
import PostByAccount from "../PostByAccount";

type PropsComponent = {
  idAccount: string;
  listValidPostOfAccount: PostForCard[];
};

const AccountContent = (props: PropsComponent) => {
  return (
    <div className="w-full">
      <PostByAccount
        idAccount={props.idAccount}
        listValidPost={props.listValidPostOfAccount}
      />
    </div>
  );
};

export default AccountContent;
