import { Alert, Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { InputControlProps } from "../../type";

const InputControl = ({
  name,
  control,
  isPass,
  placeHolder,
  error,
}: InputControlProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <div>
            {isPass ? (
              <>
                <Input.Password
                  onChange={onChange}
                  value={value}
                  placeholder={placeHolder}
                  size="large"
                  allowClear
                  status={error && "error"}
                  className="h-[75px] text-2xl pl-8"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                {error && <Alert message={error.message} type="error" />}
              </>
            ) : (
              <>
                <Input
                  onChange={onChange}
                  value={value}
                  placeholder={placeHolder}
                  size="large"
                  allowClear
                  status={error && "error"}
                  className="h-[75px] text-2xl pl-8"
                />
                {error && <Alert message={error.message} type="error" />}
              </>
            )}
          </div>
        )}
      />
    </>
  );
};

export default InputControl;
