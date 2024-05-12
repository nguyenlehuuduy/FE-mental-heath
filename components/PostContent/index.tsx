"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import PostCard from "../PostCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { getValidPost } from "../PostCard/action";
import { addPostValid } from "../../redux/actions/post";
import { Skeleton } from "antd";

export default function PostContent() {
  const postValids = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const [hasMoreData, setHasMoreData] = useState(true);
  const [page, setPage] = useState<number>(2);
  const scrollTrigger = useRef(null);

  const getInitPost = async () => {
    const initPost = await getValidPost(1);
    dispatch(addPostValid(initPost));
  };

  useEffect(() => {
    getInitPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMorePosts = async () => {
    if (hasMoreData) {
      const apiPosts = await getValidPost(page);

      if (!apiPosts?.length) {
        setHasMoreData(false);
      }
      setPage((prevPage) => prevPage + 1);
      dispatch(addPostValid(apiPosts));
    }
  };

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      },
      { threshold: 0.5 },
    );

    if (scrollTrigger.current) {
      observer.observe(scrollTrigger.current);
    }

    return () => {
      if (scrollTrigger.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(scrollTrigger.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Fragment>
      {postValids.posts &&
        postValids.posts.map((item) => (
          <PostCard item={item} key={item.post_id} />
        ))}
      <div className="text-center text-slate-600 mt-5">
        {hasMoreData ? (
          <div ref={scrollTrigger}>
            <Skeleton avatar active paragraph={{ rows: 6 }} />
          </div>
        ) : (
          <span className="text-center w-full block font-medium">
            Bạn đã xem hết tin ngày hôm nay
          </span>
        )}
      </div>
    </Fragment>
  );
}
