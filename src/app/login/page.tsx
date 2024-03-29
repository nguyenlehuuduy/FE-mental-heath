import Image from "next/image";
import { FormLogin } from "../../../components";

export default function Login() {
  return (
    <div className="max-w-[1440px] h-full flex flex-col p-12 justify-between my-12 mx-auto">
      <div className="w-full flex flex-row justify-between ">
        <div>
          <FormLogin />
        </div>
        <div>
          <Image
            src="/big_logo.png"
            width={500}
            height={500}
            alt="Logo"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
