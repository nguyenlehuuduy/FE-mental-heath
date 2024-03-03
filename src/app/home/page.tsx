"use client"

import appClient from "@/util/ApiService";


export default async function Home() {
  // dưới đây là lệnh call api
  const listImage  = await appClient.images.getImages()
  return (
    <div>
      {listImage.data?.map(item => {
        return(<p>lấy từ db:  {item.decription}</p>)
      })}
    </div>
  );
}
