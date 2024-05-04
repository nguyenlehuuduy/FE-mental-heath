'use client'
import React from 'react';
import Image from 'next/image';
const CoverPhoto = () => {
  return (
 
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
