"use client";
import { useState } from "react";
import Image from "next/image";
import TextArea from "antd/es/input/TextArea";
import { ImagesIcon, LinkIcon, ThreeDotIcon, VideoIcon } from "../../icons";
import { Button, Modal, Select } from "antd";
interface Modal {
  isOpen: boolean;
  closeModal: () => void;
}

const options = [
  { value: 1, label: "Mọi người" },
  { value: 2, label: "Bạn bè" },
  { value: 3, label: "Chỉ mình tôi" },
];

const ModalPost = ({ isOpen, closeModal }: Modal) => {
  const [selectedPerson, setSelectedPerson] = useState(options[0]);

  const handleChange = (value: { value: number; label: string }) => {
    setSelectedPerson(value);
  };
  return (
    <>
      <Modal
        open={isOpen}
        onCancel={closeModal}
        width={720}
        footer={
          <div className="flex flex-row justify-between pt-6 px-4 border-t">
            <div className="flex flex-row gap-8 items-center">
              <ImagesIcon width={25} height={25} />
              <VideoIcon width={25} height={25} />
              <LinkIcon width={25} height={25} />
              <ThreeDotIcon width={25} height={25} />
            </div>
            <Button
              size="middle"
              htmlType="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
              }}
              className="text-white cursor-pointer font-medium bg-blue-500"
              onClick={closeModal}
            >
              Đăng bài
            </Button>
          </div>
        }
      >
        <div className="flex flex-col">
          <div className="w-full px-4 pb-4 flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <Image
                src={"/nav_feature.png"}
                width={40}
                height={40}
                alt="logo"
                className="rounded-full"
              />
              <p className="text-xl font-bold ">Trần Kim Vũ</p>
            </div>
            <TextArea
              rows={6}
              style={{
                border: "none",
              }}
              size="large"
              placeholder="Bạn muốn chia sẻ về vấn đề gì ?"
            />

            <Select
              defaultValue={selectedPerson}
              style={{
                width: 120,
                border: "none",
                borderRadius: "6px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
              }}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalPost;