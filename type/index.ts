import { MouseEventHandler } from "react";

export interface TypeEntitiesInput {
  name?: string;
  control?: any;
  label?: string;
  isPass?: boolean;
  containerStyles?: string;
  isDisabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

export interface InputControlProps {
  name: string;
  control: any;
  isPass?: boolean;
  placeHolder: string;
  error: any;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface RegisterType {
  email: string;
  password: string;
  name: string;
  rePassword: string;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  iconOnly?: React.ReactNode;
  minimal?: boolean;
  smallSize?: boolean;
  mediumSize?: boolean;
  largeSize?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
