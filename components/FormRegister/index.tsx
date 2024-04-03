"use client";

import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterType } from "../../type";
import InputControl from "../InputControl";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import CustomButton from "../CustomButton";
import {
  BT_REGISTER,
  ERROR_EMAIL_FORMAT,
  ERROR_EMAIL_NULL,
  ERROR_NAME,
  ERROR_PASSWORD_NULL,
  ERROR_REPASS,
  ERROR_REPASS_VALID,
  LB_ALERT_ACCOUNT_LOGIN_YET,
  LB_OR,
  LB_WELCOME_REGISTER,
  L_LOGIN,
  PL_EMAIL,
  PL_NAME,
  PL_PASSWORD,
  PL_RE_PASSWORD,
} from "@/util/TextContants";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const FormRegister = () => {
  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .required(ERROR_EMAIL_NULL)
        .email(ERROR_EMAIL_FORMAT)
        .trim(),
      password: yup.string().required(ERROR_PASSWORD_NULL).trim(),
      name: yup.string().required(ERROR_NAME),
      rePassword: yup
        .string()
        .required(ERROR_REPASS)
        .trim()
        .oneOf([yup.ref("password")], ERROR_REPASS_VALID),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    console.log(data);
  };

  const routes = useRouter();
  return (
      <div className="max-w-[600px]">
        <div className="flex flex-col justify-center md:p-8">
          <div className="flex flex-col items-start">
            <p className="text-[#3D3D3D] text-[35px] font-bold w-full hidden md:block">
              {LB_WELCOME_REGISTER}
            </p>
            <div className="relative aspect-video md:w-1/3 w-[150px] mx-auto">
              <Image
                className="object-contain"
                alt="logo"
                fill={true}
                src={"/logo_mental_health.png"}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <InputControl
                control={control}
                name="name"
                placeHolder={PL_NAME}
                error={errors.name}
              />
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
              <InputControl
                control={control}
                name="rePassword"
                isPass
                error={errors.rePassword}
                placeHolder={PL_RE_PASSWORD}
              />
              <Button
                htmlType="submit"
                className="bg-[#0A68EB] text-white text-lg h-[50px] md:h-[50px]"
              >
                {BT_REGISTER}
              </Button>
            </div>
          </form>
          <p className="md:text-lg text-[#3D3D3D] text-center my-4">
            {LB_ALERT_ACCOUNT_LOGIN_YET}
            <span
              className="md:text-[#0F52BA] font-bold cursor-pointer ml-2"
              onClick={() => {
                routes.push("/login");
              }}
            >
              {L_LOGIN}
            </span>
          </p>
          <div className="flex flex-row justify-center items-center gap-2 mb-4">
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
        </div>
      </div>
  );
};

export default FormRegister;
