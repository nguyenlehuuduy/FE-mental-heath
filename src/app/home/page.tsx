"use client"

import appClient from "@/util/ApiService";


export default async function Home() {
  // dưới đây là lệnh call api
  const listImage  = await appClient.images.getImages()
  return (
    <div>
      {listImage.data?.map((item, index) => {
        return(<p key={index}>lấy từ db:  {item.decription}</p>)
      })}
    </div>
  );
}
