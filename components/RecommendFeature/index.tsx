import { Recommend } from "@/util/TextContants";
import Image from "next/image";
import React from "react";

const listRecommend = [
  {
    id: 1,
    image: "/nav_feature.png",
    name: "Nguyễn Lê Hữu Duy",
    description: "Chuyên gia tư vấn tâm lý"
  },
  {
    id: 2,
    image: "/nav_feature.png",
    name: "Nguyễn Lê Hữu Duy",
    description: "Chuyên gia tư vấn tâm lý"
  },
  {
    id: 3,
    image: "/nav_feature.png",
    name: "Nguyễn Lê Hữu Duy",
    description: "Chuyên gia tư vấn tâm lý"
  },
];

const RecommendFeature = () => {
  return (
    
    <div className="w-full px-4 py-2 ">
        <div className="w-full h-[1px] border border-[#cccccc80]"></div> 
        <div className="w-full py-5">
          <span className="text-[#0F52BA] text-lg font-bold cursor-pointer">
              {Recommend}
            </span>
          <div className="flex flex-col gap-4 pt-4">
                {listRecommend.map((item: any) => (
                <div key={item.id} className="flex flex-row items-center gap-4">
                    <Image
                      src={item.image}
                      width={60}
                      height={60}
                      alt="logo"
                      className="rounded-[50%]"
                  />
                  <div className="flex flex-col ">
                    <p className="text-base font-bold text-[#000000B3]">{item.name}</p>
                    <p className="text-base text-[#000000B3]">{item.description}</p>
                  </div>
                </div>
                ))}
            </div>  
            <p className="py-5 text-base font-bold text-[#0F52BA] text-center cursor-pointer">
          Xem thêm
        </p>
          <div className="w-full h-[1px] border border-[#cccccc80]"></div> 
        </div>
        
      </div>
      
  );
};

export default RecommendFeature;