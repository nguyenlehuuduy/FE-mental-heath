"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Collapse } from "antd";

const text = `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`;
type ExpandIconPosition =  'end';

const LandingPage5 = () => {
  const [expandIconPosition] = useState<ExpandIconPosition>("end");
  const panelStyle = { border: "2px solid #729ed8", borderRadius: "8px" };
  const questions = [
    "Dự án GenZ Mental Health là gì?",
    "Ai là đối tượng mà GenZ Mental Health hướng đến?",
    "Tại sao GenZ Mental Health lại quan trọng đối với giới trẻ hiện nay?",
    "Các dịch vụ và sản phẩm chính mà GenZ Mental Health cung cấp bao gồm những gì?",
    "Làm thế nào để tôi có thể tham gia vào cộng đồng GenZ Mental Health ?",
    "Liệu tôi có thể an toàn và bảo mật khi chia sẻ thông tin cá nhân trên GenZ Mental Health ?"
  ];

  return (
    <div className="flex flex-col overflow-auto">
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-3xl text-[#0F52BA]">Q & A</p>
      </div>
      <div className="flex flex-row py-6">
        <div className="flex w-[50%] items-center justify-center px-8">
          <div className="w-[700px] space-y-1 px-5">
            <Collapse
              accordion
              collapsible="header"
              expandIconPosition={expandIconPosition}
              className="space-y-5 bg-[#D7EFFF]"
              style={{ border: "none" }}
            >
              {questions.map((question, index) => (
                <Collapse.Panel
                  header={<p className="font-bold text-lg text-[#0F52BA]">{question}</p>}
                  key={index + 1}
                  style={panelStyle}
                >
                  <p>{text}</p>
                </Collapse.Panel>
              ))}
            </Collapse>
          </div>
        </div>
        <div className="flex w-[50%] items-center justify-center px-10">
          <Image
            className="object-contain"
            width={500}
            height={500}
            alt="logo"
            src={"/landing5.svg"}
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPage5;
