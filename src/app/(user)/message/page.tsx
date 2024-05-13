"use client";

import { useState } from "react";
import { MessageFrame, ChatList, MessageShare } from "../../../../components";

export default function MessagePage() {
  const [openShare, setOpenShare] = useState<boolean>(false);

  const handleOpenShare = () => {
    setOpenShare(!openShare);
  };

  return (
    <div className="flex gap-2 w-full">
      <div
        className={` ${openShare ? "w-[10%]" : "w-[30%]"} bg-white rounded-md p-2`}
      >
        <ChatList />
      </div>
      <div className="w-[70%] bg-white rounded-md p-2">
        <MessageFrame />
      </div>
      {openShare && <MessageShare handleClose={handleOpenShare} />}
    </div>
  );
}
