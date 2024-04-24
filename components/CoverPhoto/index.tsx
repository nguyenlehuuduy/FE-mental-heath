'use client'
import React from 'react';
import Image from 'next/image';
import {
    ImageCover
  } from "../../icons";
const CoverPhoto = () => {
  return (
    // <div className="relative w-full px-1 mx-auto">
    //     <ImageCover className="border border-gray-300 rounded-md"/>
    // </div>
    <div className="relative md:w-[1140px] h-[217px] mx-auto">
    <Image
        src={"/coverphoto.svg"}
        layout="fill"
        objectFit="cover"
        alt="coverphoto"
        className="rounded"
    />
</div>
  );
};

export default CoverPhoto;
