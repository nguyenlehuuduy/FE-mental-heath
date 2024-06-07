
import Image from "next/image";
const FooterLanding = () => {
  return (
    <div className="flex flex-col">
    <div className="w-[95%] flex flex-row py-5 space-x-5   items-center mx-auto">
      <div className="flex w-[50%]  space-x-10 justify-around">
        <div className="flex flex-col px-2  items-start">
          <Image
            className="object-contain"
            width={130}
            height={50}
            alt="logo"
            src={"/logo.svg"}
          />
          <div className="w-[80%] py-5">
          <p className="text-[#0F52BA]">
            Bạn đã đến đích nhưng chưa phải là cuối cùng!{" "}
          </p>
          <p className="text-[#0F52BA]">
            {" "}
            Hãy nhớ rằng, bạn không đơn độc. Tiếp cận, tìm kiếm sự hỗ trợ và ưu
            tiên sức khỏe tinh thần của bạn.
          </p>
          </div>
        </div>
        <div className="flex flex-col w-[50%]  justify-between">
          <p className="font-bold text-xl">Dịch vụ</p>
          <div className="flex flex-col space-y-2 py-5">
          <a href="#" className="  hover:text-blue-500">Sẻ chia</a>
          <a href="#" className="   hover:text-blue-500">Chữa lành</a>
          <a href="#" className="  hover:text-blue-500">Thư giãn</a>
          <a href="#" className=" hover:text-blue-500">Các nhóm hỗ trợ</a>
          </div>
        </div>
      </div>
      <div className="flex w-[50%] justify-around">
        <div className="flex flex-col  ">
          <p className="font-bold text-xl">Kết nối</p>
          <div className="space-y-3 py-5">
            <div className="flex flex-row space-x-4">
              <Image
                className="object-contain"
                width={30}
                height={30}
                alt="logo"
                src={"/contact_icon.svg"}
              />
              <p> 0123456789</p>
            </div>
            <div className="flex flex-row space-x-4 ">
              <Image
                className="object-contain"
                width={30}
                height={30}
                alt="logo"
                src={"mail_icon.svg"}
              />
              <p> genzmentalhealth@gmail.com</p>
            </div>
            <div className="flex flex-row space-x-4">
              <Image
                className="object-contain"
                width={30}
                height={30}
                alt="logo"
                src={"/location_icon.svg"}
              />
              <p> 470 Trần Đại Nghĩa</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-2">
          <p className="font-bold text-xl">Cộng đồng</p>
          <div className="space-y-3 py-5">
            <a href="#" className=" text-center hover:text-blue-500">GenZ Mental Health</a>
          </div>
        </div>
      </div>
      
    </div>
    <hr className="border border-[#0F52BA] "/>
    <div className="flex mx-auto py-5 space-x-4">
    <Image
                className="object-contain"
                width={200}
                height={200}
                alt="logo"
                src={"/social_icon.svg"}
              />
              <Image
                className="object-contain"
                width={40}
                height={40}
                alt="logo"
                src={"/linkedin_icon.svg"}
              />
    </div>
    </div>
  );
};
export default FooterLanding;
