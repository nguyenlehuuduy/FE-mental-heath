import Image from "next/image";
import Link from "next/link";

const listRadio = [
  {
    id: 1,
    image: "/nav_feature.png",
    url: "/",
    title: "radio tam su",
  },
  {
    id: 2,
    image: "/nav_feature.png",
    url: "/",
    title: "radio chia se",
  },
  {
    id: 3,
    image: "/nav_feature.png",
    url: "/",
    title: "Cach chua lanh",
  },
  {
    id: 4,
    image: "/nav_feature.png",
    url: "/",
    title: "chua lanh la gi",
  },
];

const HotArea = () => {
  return (
    <div className="w-full px-4 mx-auto pb-20 ">
      <span className="text-[#0F52BA] font-bold cursor-pointer">
        Đáng chú ý
      </span>
      <div className="grid grid-cols-2 justify-items-center">
        {listRadio.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className="flex flex-col items-center w-[120px] p-3"
          >
            <Image
              src={item.image}
              width={100}
              height={100}
              alt="image"
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
