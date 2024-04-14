"use client";

import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginTypes } from "../../type";
import InputControl from "../InputControl";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import CustomButton from "../CustomButton";
import {
  BT_LOGIN,
  ERROR_EMAIL_FORMAT,
  ERROR_EMAIL_NULL,
  ERROR_PASSWORD_NULL,
  LB_ALERT_ACCOUNT_YET,
  LB_OR,
  LB_WELCOME,
  L_FORGOT_PASS,
  L_REGISTER,
  PL_EMAIL,
  PL_PASSWORD,
  P_FORGOT_PASS,
} from "@/util/TextContants";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const FormLogin = () => {
  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .required(ERROR_EMAIL_NULL)
        .email(ERROR_EMAIL_FORMAT)
        .trim(),
      password: yup.string().required(ERROR_PASSWORD_NULL).trim(),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginTypes> = (data) => {
    console.log(data);
  };

  const routes = useRouter();
  return (
    <div>
      <div className="flex flex-col justify-center mx-auto">
        <div className="flex flex-row items-center justify-center">
          <p className="text-[#3D3D3D] text-[30px] font-bold w-[350px] hidden md:block">
            {LB_WELCOME}
          </p>
          <div className="relative aspect-video md:w-[160px] w-[160px] md:mt-2 ">
            <Image
              className="object-contain"
              alt="logo"
              fill={true}
              src={"/logo_mental_health.png"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center md:w-[400px] mx-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <InputControl
              control={control}
              name="email"
              placeHolder={PL_EMAIL}
              error={errors.email}
            />
            <InputControl
              control={control}
              name="password"
              isPass
              error={errors.password}
              placeHolder={PL_PASSWORD}
            />
            <Button
              htmlType="submit"
              className="bg-[#0A68EB] text-white text-lg h-[50px] md:h-[50px]"
            >
              {BT_LOGIN}
            </Button>
          </div>
        </form>
        <p className="md:text-lg text-[#3D3D3D] text-center my-3">
          {P_FORGOT_PASS}
          <span className="text-[#0F52BA] font-bold cursor-pointer ml-2">
            {L_FORGOT_PASS}
          </span>
        </p>
        <div className="flex flex-row justify-center items-center gap-2 mb-3">
          <div className="w-full h-[1px] border border-[#00000080]"></div>
          <p className="md:text-lg text-[#00000080] text-center">{LB_OR}</p>
          <div className="w-full h-[1px] border border-[#00000080]"></div>
        </div>

        <CustomButton
          leftIcon={
            <Image
              src="/google_icon.png"
              width={35}
              height={35}
              alt="google icon"
            />
          }
          title="Tiếp tục với google"
          containerStyles="py-6 rounded-[10px] bg-[#F9F9F9] border gap-2"
          textStyles="text-[24px] font-bold text-[#3D3D3D]"
        />

        <p className="md:text-lg text-[#3D3D3D] text-center my-5">
          {LB_ALERT_ACCOUNT_YET}
          <span
            className="md:text-[#0F52BA] font-bold cursor-pointer ml-2"
            onClick={() => routes.push("/register")}
          >
            {L_REGISTER}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
