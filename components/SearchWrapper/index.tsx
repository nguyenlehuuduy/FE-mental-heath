"use client";

import React from "react";
import SearchAccount from "../SearchAccount";
import SearchPost from "../SearchPost";
import { SearchAccountForCard, SearchPostTypeForCard } from "@/service/searchService";

type PropsComponent = {
  listAccounts: SearchAccountForCard[];
  listPosts: SearchPostTypeForCard[];
}

const SearchWrapper = ({
  listAccounts,
  listPosts,
}: PropsComponent) => {
  return (
    <div className="w-[480px]">
      <SearchAccount listAccounts={listAccounts} />
      <SearchPost listPosts={listPosts} />
    </div>
  );
};

export default SearchWrapper;
