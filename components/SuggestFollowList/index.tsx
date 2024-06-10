"use client";

import { SuggestFollowForCard } from "@/service/followService";
import React, { useState } from "react";
import SuggestFollowItem from "../SuggestFollowItem";

type PropsComponent = {
  listSuggestFollow: SuggestFollowForCard[];
};

const SuggestFollowList = ({ listSuggestFollow }: PropsComponent) => {
  const [suggestFollows, setSuggestFollows] =
    useState<SuggestFollowForCard[]>(listSuggestFollow);

  return (
    <div className="py-7 flex flex-col gap-5 min-h-screen overflow-y-auto">
      {suggestFollows.map((item) => (
        <SuggestFollowItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SuggestFollowList;
