"use client";

import { Button, Input, Modal, Spin } from "antd";
import { useFormState } from "react-dom";
import { ActionRoomForCreateState, createRoom } from "./action";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type PropsComponent = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};
const defaultData = {
  nameRoom: "",
};
const initialState: ActionRoomForCreateState = {
  validate: defaultData,
  success: false,
};

export default function ModalCreateRoomChatBot(props: PropsComponent) {
  const [loading, setLoading] = useState<boolean>(false);
  const [{ validate, success, idRoom }, formAction] = useFormState(
    createRoom,
    initialState,
  );
  const routes = useRouter();
  useEffect(() => {
    if (success) {
      routes.replace(`/chat-bot?idBotRoom=${idRoom}`);
      props.handleCancel();
      setLoading(false);
    }
  }, [success]);
  return (
    <Modal
      title="Trò chuyện với trợ lí tâm lí ảo"
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={false}
    >
      <form action={formAction} onSubmit={() => setLoading(true)}>
        <p className="mt-5">Tiêu đề</p>
        <Input
          disabled={loading}
          placeholder="nhập tiêu đề cuộc trò chuyện (cuộc sống, con người, genz mental heath)"
          name="nameRoom"
        />
        <p className="invalid_err">{validate?.nameRoom}</p>
        <Button
          loading={loading}
          className="text-white cursor-pointer font-medium bg-blue-500 mt-6"
          htmlType="submit"
        >
          Tạo
        </Button>
        {loading && (
          <Spin tip="Đang khởi tạo..." size="small">
            Chờ tớ xíu nha
          </Spin>
        )}
      </form>
    </Modal>
  );
}
