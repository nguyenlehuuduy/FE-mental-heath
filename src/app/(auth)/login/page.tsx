import Image from "next/image";
import dynamic from "next/dynamic";

const FormLogin = dynamic(() => import("../../../../components/FormLogin"), {
  ssr: false,
});
export default function Login() {
 
  return (
    <div className="max-w-[1440px] w-full h-full md:px-6 px-3 flex flex-row justify-center">
      <div className="md:mx-auto">
        <FormLogin />
      </div>
      <div className="md:mx-auto mt-10">
        <Image
          className="hidden md:block"
          src="/big_logo.png"
          width={300}
          height={300}
          alt="Logo"
          quality={100}
          />
      </div>
    </div>
  );
}
