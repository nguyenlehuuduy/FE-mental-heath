import { HotContentForCard } from "@/service/hotContentService";
import Image from "next/image";
import Link from "next/link";

type PropsComponent = {
  listHotContent: Array<HotContentForCard>;
};
const HotArea = (props: PropsComponent) => {
  return (
    <div className="w-full p-3 bg-white rounded-md">
      <span className="text-[#0F52BA] font-bold pb-3"> Đáng chú ý</span>
      <div className="grid grid-cols-2 justify-items-center gap-y-3 pt-4">
        {props.listHotContent.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className="flex flex-col items-center w-[110px] gap-1"
          >
            <Image
              src={item.thumbnail_file_name}
              width={70}
              height={70}
              alt="hinh anh thong tin noi bat"
              className="aspect-square w-full h-auto object-cover rounded-[5px]"
            />
            <span className="text-[13px] font-medium">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotArea;
