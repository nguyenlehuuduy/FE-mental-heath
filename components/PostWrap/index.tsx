"use client";

import { PostForCard } from "@/service/postService";
import React, { Suspense } from "react";
import PostContent from "../PostContent";
import { useDispatch } from "react-redux";
import { addPostValid } from "../../redux/actions/post";
import { Pagination } from "../../type";

const PostWrap = ({
  listValidPostOfAccount,
}: {
  listValidPostOfAccount: { data: PostForCard[]; pagination: Pagination };
}) => {
  const dispatch = useDispatch();
  dispatch(addPostValid(listValidPostOfAccount.data));
  return (
    <div>
      <Suspense>
        <PostContent />
      </Suspense>
    </div>
  );
};

export default PostWrap;
