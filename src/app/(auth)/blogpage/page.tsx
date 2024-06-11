import React from "react";
import {
  AllPostHomeBlog,
  BlogPage1,
  BlogPage3,
  BlogPage4,
  BlogPage5,
  BlogPage6,
  BlogPage7,
  FeatureArticle,
  LandingPage6,
} from "../../../../components";
export default function BlogPage() {
  return (
    <div className="w-full h-full bg-[#FFFFFF]">
      <div className="px-5 bg-[#FFFFFF]">
        <BlogPage1 />
      </div>
      <div className="flex flex-row px-20 py-2 h-[700px] bg-[#FFFFFF] ">
        <div className="w-[55%] ">
          <FeatureArticle />
        </div>
        <div className="px-5 w-[45%] ">
          <AllPostHomeBlog />
        </div>
      </div>
      <div className="px-5">
        <BlogPage3 />
      </div>
      <div className="px-5">
        <BlogPage4 />
      </div>
      <div className="px-10">
        <BlogPage5 />
      </div>
      <div className="px-10">
        <BlogPage6 />
      </div>

      <div className=" px-5 py-10">
        <LandingPage6 />
      </div>
      <div className=" px-5 py-10">
        <BlogPage7 />
      </div>
    </div>
  );
}
