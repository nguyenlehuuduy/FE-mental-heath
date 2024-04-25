import { FeatureForCard } from "@/service/featureService";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsComponent = {
  listHotFeatureContent: Array<FeatureForCard>;
};
const NavFeature = (props: PropsComponent) => {
  return (
    <div className="w-full p-5">
      <div className="flex flex-col gap-3">
        {props.listHotFeatureContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-3 cursor-pointer"
          >
            <Image
              src={item.thumbnail_file_name}
              width={60}
              height={60}
              alt="tinn nang"
              className="rounded-[10px]"
            />
            <p className="font-medium">{item.name}</p>
          </div>
        ))}
        <Link className="font-medium text-center mt-3" href={""}>
          Xem thêm
        </Link>
      </div>
    </div>
  );
};

export default NavFeature;
