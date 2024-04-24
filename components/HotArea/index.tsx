import { HotContentForCard } from "@/service/hotContentService";
import Image from "next/image";
import Link from "next/link";

type PropsComponent = {
  listHotContent: Array<HotContentForCard>;
};
const HotArea = (props: PropsComponent) => {
  return (
    <div className="w-full px-4 mx-auto pb-20 ">
      <span className="text-[#0F52BA] font-bold cursor-pointer">
        Đáng chú ý
      </span>
      <div className="grid grid-cols-2 justify-items-center">
        {props.listHotContent.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className="flex flex-col items-center w-[120px] p-3"
          >
            <Image
              src={item.thumbnail_file_name}
              width={100}
              height={100}
              alt="hinh anh thong tin noi bat"
              className="aspect-square w-full h-auto object-cover rounded-[5px]"
            />
            <span className="text-[14px] font-medium mt-2">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotArea;
