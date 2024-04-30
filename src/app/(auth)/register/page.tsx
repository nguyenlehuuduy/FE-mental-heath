import Image from "next/image";
import dynamic from "next/dynamic";
import { HeaderLogin } from "../../../../components";

const FormRegister = dynamic(
  () => import("../../../../components/FormRegister"),
  {
    ssr: false,
  },
);
export default function Register() {
  return (
    <div className="max-w-[1440px] w-full h-full md:px-6 px-3 justify-center items-center mx-auto">
      <div className="hidden md:block">
      <HeaderLogin />
      </div>
      <div className="flex">
      <div className="md:mx-auto mt-10 md:mt-0 mx-auto ">
        <FormRegister />
      </div>
      <div className="md:mx-auto ">
        <Image
          className="hidden md:block"
          src="/coverlogin.svg"
          width={600}
          height={600}
          alt="Logo"
          quality={100}
        />
        </div>
      </div>
    </div>
  );
}
