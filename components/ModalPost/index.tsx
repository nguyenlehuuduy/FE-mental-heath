"use client";

import Image from "next/image";
import TextArea from "antd/es/input/TextArea";
import { ImagesIcon, LinkIcon, ThreeDotIcon, VideoIcon } from "../../icons";
import { Button, Modal } from "antd";
import { useFormState } from "react-dom";
import { ActionPostState, post } from "./action";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import AvatarAccount from "../Avata";

interface Modal {
  isOpen: boolean;
  closeModal: () => void;
}
const defaultData = {
  contentText: "",
};
const initialState: ActionPostState = {
  validate: defaultData,
  success: false,
};

const ModalPost = ({ isOpen, closeModal }: Modal) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [data, formAction] = useFormState(post, initialState);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const images: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!isValidImage(file)) {
        console.error("Invalid image file:", file.name);
        continue;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      try {
        const dataUrl: string = await new Promise((resolve, reject) => {
          reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target?.result && typeof e.target.result === "string") {
              resolve(e.target.result);
            } else {
              reject(new Error("Failed to read image data"));
            }
          };
          reader.onerror = reject;
        });

        images.length < 4 && images.push(dataUrl);
      } catch (error) {
        console.error("Error reading image:", file.name, error);
      }
    }
    setImages(images);
  };

  function isValidImage(file: File): boolean {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    return allowedMimeTypes.includes(file.type);
  }

  useEffect(() => {
    setLoading(false);
    if (data.success) {
      closeModal();
    }
  }, [data]);

  return (
    <>
      <Modal
        open={isOpen}
        width={720}
        footer={false}
        onCancel={closeModal}
        destroyOnClose
      >
        <form
          action={formAction}
          className="flex flex-col"
          onSubmit={() => setLoading(true)}
        >
          <div className="w-full px-4 pb-4 flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <div className="relative">
                <AvatarAccount
                  filePath={user?.avata}
                  name={user?.full_name ?? "D"}
                />
              </div>

              <p className="text-xl font-medium ">{user?.full_name}</p>
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
            <span>{data.validate?.contentText}</span>
            <span>{data.validate?.image}</span>
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
                    className="w-[100px] h-[100px] rounded-md relative overflow-hidden"
                  >
                    <Image
                      className="absolute w-full h-full object-contain"
                      width={500}
                      height={500}
                      objectFit="cover"
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
