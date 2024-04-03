import Image from "next/image";
import dynamic from "next/dynamic";

const FormRegister = dynamic(
  () => import("../../../../components/FormRegister"),
  {
    ssr: false,
  },
);
export default function Register() {
  return (
    <div className="max-w-[1440px] h-full md:px-10 px-3 flex flex-row justify-center mx-auto">
      <div className="md:ml-20">
        <FormRegister />
      </div>
      <div className="md:mx-auto mt-4 md:mt-16">
        <Image
          className="hidden md:block"
          src="/big_logo.png"
          width={274}
          height={274}
          alt="Logo"
          quality={100}
        />
      </div>
    </div>
  );
}
