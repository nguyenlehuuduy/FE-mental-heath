"use client";

import { useState } from "react";
import { MessageFrame, ChatList, MessageShare } from "../../../../components";

export default function MessagePage() {
  const [openShare, setOpenShare] = useState<boolean>(false);

  const handleOpenShare = () => {
    setOpenShare(!openShare);
  };

  return (
    <div className="flex flex-row w-full">
      <ChatList />
      <MessageFrame handleOpenShare={handleOpenShare} />
      {openShare && <MessageShare handleClose={handleOpenShare} />}
    </div>
  );
}
