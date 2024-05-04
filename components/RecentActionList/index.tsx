"use client";
import Image from "next/image";
import Link from "next/link";
export default function RecentActionList() {
  return (
    <div className="w-full h-[calc(100vh-100px)] overflow-y-auto flex flex-col gap-5">
      <div className="w-full  flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2 items-center text-[14px] w-full">
          <p className="col-span-3">
            Add images and video to your design files to incorporate
            photography...
          </p>
          <div className="col-span-1 w-[60px] h-[60px] overflow-hidden">
            <Image
              alt="image for avata account"
              width={50}
              height={50}
              className="rounded-full w-full h-full"
              src="https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp"
            />
          </div>

          <Link href={""} className="col-span-1">
            Data test
          </Link>
          <p>5/4/2024</p>
          <p className="col-span-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            commodi earum repellendus ad at et, beatae ea! Cum inventore, illo
            non, dicta aut explicabo voluptatem ratione nostrum nobis asperiores
            sapiente?
          </p>
          <Link
            className="block col-span-3 text-right w-full text-[#0A68EB]"
            href={""}
          >
            Xem thêm
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2 items-center text-[14px] w-full">
          <p className="col-span-3">
            Add images and video to your design files to incorporate
            photography...
          </p>
          <div className="col-span-1 w-[60px] h-[60px] overflow-hidden">
            <Image
              alt="image for avata account"
              width={50}
              height={50}
              className="rounded-full w-full h-full"
              src="https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp"
            />
          </div>

          <Link href={""} className="col-span-1">
            Data test
          </Link>
          <p>5/4/2024</p>
          <p className="col-span-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            commodi earum repellendus ad at et, beatae ea! Cum inventore, illo
            non, dicta aut explicabo voluptatem ratione nostrum nobis asperiores
            sapiente?
          </p>
          <Link
            className="block col-span-3 text-right w-full text-[#0A68EB]"
            href={""}
          >
            Xem thêm
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2 items-center text-[14px] w-full">
          <p className="col-span-3">
            Add images and video to your design files to incorporate
            photography...
          </p>
          <div className="col-span-1 w-[60px] h-[60px] overflow-hidden">
            <Image
              alt="image for avata account"
              width={50}
              height={50}
              className="rounded-full w-full h-full"
              src="https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp"
            />
          </div>

          <Link href={""} className="col-span-1">
            Data test
          </Link>
          <p>5/4/2024</p>
          <p className="col-span-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            commodi earum repellendus ad at et, beatae ea! Cum inventore, illo
            non, dicta aut explicabo voluptatem ratione nostrum nobis asperiores
            sapiente?
          </p>
          <Link
            className="block col-span-3 text-right w-full text-[#0A68EB]"
            href={""}
          >
            Xem thêm
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2 items-center text-[14px] w-full">
          <p className="col-span-3">
            Add images and video to your design files to incorporate
            photography...
          </p>
          <div className="col-span-1 w-[60px] h-[60px] overflow-hidden">
            <Image
              alt="image for avata account"
              width={50}
              height={50}
              className="rounded-full w-full h-full"
              src="https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp"
            />
          </div>

          <Link href={""} className="col-span-1">
            Data test
          </Link>
          <p>5/4/2024</p>
          <p className="col-span-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            commodi earum repellendus ad at et, beatae ea! Cum inventore, illo
            non, dicta aut explicabo voluptatem ratione nostrum nobis asperiores
            sapiente?
          </p>
          <Link
            className="block col-span-3 text-right w-full text-[#0A68EB]"
            href={""}
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );
}
