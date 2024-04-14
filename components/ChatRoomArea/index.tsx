import Image from "next/image";
import Link from "next/link";

const listRoomChat = [
  {
    image: "/nav_feature.png",
    nameTarget: "Nguyễn Lê Hữu Duy",
  },
  {
    image: "/nav_feature.png",
    nameTarget: "Nguyễn Hải Dương",
  },
  {
    image: "/nav_feature.png",
    nameTarget: "Nguyễn Khắc Thịnh",
  },
  {
    image: "/nav_feature.png",
    nameTarget: "Nguyễn Thanh Cường",
  },
  {
    image: "/nav_feature.png",
    nameTarget: "Trần Kim Vũ",
  },
  {
    image: "/nav_feature.png",
    nameTarget: "Cao Sơn Hải",
  },
];

export default function ChatRoomArea() {
  return (
    <div className="mt-[30px] pb-20">
      <label className="font-bold">Trò chuyện</label>
      <div className="flex flex-col gap-4 mt-5">
        {listRoomChat.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-2 cursor-pointer"
          >
            <Image
              src={item.image}
              width={50}
              height={50}
              alt="image user"
              className="rounded-[50%]"
            />
            <p className="font-medium">{item.nameTarget}</p>
          </div>
        ))}
        <Link className="font-bold text-blue-500 underline" href="">
          Xem tất cả
        </Link>
      </div>
    </div>
  );
}
