"use client";

import React, { Suspense } from "react";
import PostContent from "../PostContent";

const PostWrap = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <PostContent /> */}
      </Suspense>
    </div>
  );
};

export default PostWrap;
