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
      <FormRegister />
      <div>
        <Image
          className="hidden md:block"
          src="/big_logo.png"
          width={500}
          height={500}
          alt="Logo"
          quality={100}
        />
      </div>
    </div>
  );
}
