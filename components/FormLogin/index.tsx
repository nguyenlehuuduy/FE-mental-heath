"use client";

import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginTypes } from "../../type";
import InputControl from "../InputControl";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import CustomButton from "../CustomButton";

const FormLogin = () => {
  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .required("Bắt buộc phải nhập")
        .email("Phải nhập đúng kiểu email")
        .trim(),
      password: yup.string().required("Bắt buộc phải nhập").trim(),
    })
    .required();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginTypes> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[600px]">
      <div className="flex flex-col justify-center p-8 ">
        {/* Title */}
        <div className="flex flex-row items-center gap-2 mb-[90px]">
          <p className="text-[#3D3D3D] text-[40px] font-bold text-center">
            Welcome to{" "}
          </p>
          <p className="text-[#0F52BA] text-[45px] font-bold">
            GenZ{" "}
            <span className="rounded-[10px] bg-[#0F52BA] text-white px-2 py-1 text-center">
              MH
            </span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-10">
            <InputControl
              control={control}
              name="email"
              placeHolder="Nhập email của bạn"
              error={errors.email}
            />
            <InputControl
              control={control}
              name="password"
              isPass
              error={errors.password}
              placeHolder="Nhập mật khẩu của bạn"
            />
            <button
              className="px-2 py-4 bg-[#0A68EB] text-white font-bold rounded-[10px] text-2xl"
              type="submit"
            >
              Đăng nhập
            </button>
          </div>
        </form>
        <p className="text-xl text-[#3D3D3D] text-center my-5">
          Bạn quên mật khẩu ?{" "}
          <span className="text-[#0F52BA] font-bold cursor-pointer">
            Cập nhật lại ngay
          </span>
        </p>
        <div className="flex flex-row justify-center items-center gap-2 mb-5">
          <div className="w-full h-[1px] border border-[#00000080]"></div>
          <p className="text-xl text-[#00000080] text-center">hoặc</p>
          <div className="w-full h-[1px] border border-[#00000080]"></div>
        </div>

        <CustomButton
          leftIcon={
            <Image
              src="/google_icon.png"
              width={40}
              height={40}
              alt="google icon"
            />
          }
          title="Tiếp tục với google"
          containerStyles="py-9 rounded-[10px] bg-[#F9F9F9] border gap-2"
          textStyles="text-[24px] font-bold text-[#3D3D3D]"
        />

        <p className="text-xl text-[#3D3D3D] text-center my-5">
          Bạn chưa có tài khoản ?{" "}
          <span className="text-[#0F52BA] font-bold cursor-pointer">
            Đăng ký ngay
          </span>
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
