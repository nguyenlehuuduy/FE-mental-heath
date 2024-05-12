"use client";

import React, { useEffect } from "react";
import SearchAccount from "../SearchAccount";
import SearchPost from "../SearchPost";
import { getAccountsByName } from "./action";
import { SearchAccountType, SearchPostType } from "@/service/searchService";

const SearchWrapper = ({
  listAccounts,
  listPosts,
}: {
  listAccounts: SearchAccountType[];
  listPosts: SearchPostType[];
}) => {
  return (
    <div className="w-[480px]">
      <SearchAccount listAccounts={listAccounts} />
      <SearchPost listPosts={listPosts} />
    </div>
  );
};

export default SearchWrapper;
