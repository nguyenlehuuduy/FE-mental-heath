"use client";

import { Fragment } from "react";
import PostCard from "../PostCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";

export default function PostContent() {
  const postValids = useSelector((state: RootState) => state.post);

  return (
    <Fragment>
      {postValids.posts &&
        postValids.posts.map((item) => (
          <PostCard item={item} key={item.post_id} />
        ))}
    </Fragment>
  );
}
