"use client";

import { EVENTS } from "@/lib/constants";
import { socketService } from "@/socket";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

type PropsComponent = {
  sessionKey: string;
  urlSocket?: string;
  idUser: string;
};

export default function useSocket({
  sessionKey,
  idUser,
  urlSocket = "http://localhost:8005",
}: PropsComponent) {
  // Set the URL for the socket service
  socketService.connectWithAuthToken(sessionKey);

  const [mySocket, setMySocket] = useState<Socket>(socketService);

  useEffect(() => {
    if (socketService.checkConnect()) {
      onConnect();
    }

    function onConnect() {
      socketService.onUpgrade((transport) => {});
      setMySocket(socketService as unknown as Socket);
      // JOIN NOTIFICATION IDENTIFY
      socketService.emit(EVENTS.CLIENT.JOIN_NOTIFICATION_IDENTIFY, idUser);
    }

    function onDisconnect() {}

    socketService.on("connect", onConnect);
    socketService.on("disconnect", onDisconnect);

    return () => {
      socketService.off("connect", onConnect);
      socketService.off("disconnect", onDisconnect);
    };
  }, [idUser]);

  const joinRoomMessage = (idRoom: string) => {
    socketService.joinRoom(idRoom);
  };

  return { mySocket, joinRoomMessage };
}
