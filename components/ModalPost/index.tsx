"use client";

import Image from "next/image";
import TextArea from "antd/es/input/TextArea";
import { ImagesIcon, LinkIcon, ThreeDotIcon, VideoIcon } from "../../icons";
import { Button, Modal, notification } from "antd";
import { MyselfForCard } from "@/service/accountService";
import { useFormState } from "react-dom";
import { ActionPostState, post } from "./action";
import React, { useEffect, useState } from "react";

interface Modal {
  isOpen: boolean;
  closeModal: () => void;
  profile: MyselfForCard;
}
const defaultData = {
  contentText: "",
};
const initialState: ActionPostState = {
  validate: defaultData,
  success: false,
};

const ModalPost = ({ isOpen, closeModal, profile }: Modal) => {
  const [{ validate, success }, formAction] = useFormState(post, initialState);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    if (files) {
      const images: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target?.result && typeof e.target.result === "string") {
            images.push(e.target.result);
            setImages(images);
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };
  useEffect(() => {
    if (success) {
      openNotification();
      setLoading(true);
      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  }, [success]);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "Bài viết của bạn đã được tải lên",
      description: "Cảm ơn vì bạn đã chia sẻ.",
    });
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={isOpen}
        width={720}
        footer={false}
        onCancel={closeModal}
        destroyOnClose
      >
        <form action={formAction} className="flex flex-col">
          <div className="w-full px-4 pb-4 flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <Image
                src={profile.avata}
                width={60}
                height={60}
                alt="logo"
                className="rounded-full"
              />
              <p className="text-xl font-medium ">{profile.full_name}</p>
            </div>
            <TextArea
              rows={6}
              style={{
                border: "none",
              }}
              name="contentText"
              size="large"
              placeholder="Bạn muốn chia sẻ về vấn đề gì ?"
            />
            <span>{validate?.contentText}</span>
            <span>{validate?.image}</span>
          </div>
          <div>
            <input
              id="upload_image_multi"
              className="hidden"
              name="image"
              type="file"
              onChange={onImageChange}
              multiple
              accept="image/png, image/gif, image/jpeg"
            />

            {images.length > 0 && (
              <div className="flex flex-wrap gap-3 items-center">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[150px] h-[150px]  rounded-md relative pb-[1/2] overflow-hidden"
                  >
                    <img
                      className="absolute w-full h-full object-cover"
                      src={image}
                      alt={`preview image ${index + 1}`}
                      key={index}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-row justify-between pt-6 px-4">
            <div className="flex flex-row gap-8 items-center">
              <label className="cursor-pointer" htmlFor="upload_image_multi">
                <ImagesIcon width={25} height={25} />
              </label>
              <VideoIcon width={25} height={25} />
              <LinkIcon width={25} height={25} />
              <ThreeDotIcon width={25} height={25} />
            </div>
            <Button
              loading={loading}
              size="middle"
              htmlType="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
              }}
              className="text-white cursor-pointer font-medium bg-blue-500"
            >
              Đăng bài
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalPost;
