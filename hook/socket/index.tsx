"use client";

import { EVENTS } from "@/lib/constants";
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
  const socket = io(urlSocket, {
    transports: ["websocket"],
    auth: {
      token: sessionKey ?? "",
    },
  });

  const [mySocket, setMySocket] = useState<Socket>(socket);
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }
    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);
      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
      setMySocket(socket);
      // JOIN NOTIFICATION IDENTIFY
      mySocket.emit(EVENTS.CLIENT.JOIN_NOTIFICATION_IDENTIFY, idUser);
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    mySocket.on("connect", onConnect);
    mySocket.on("disconnect", onDisconnect);

    return () => {
      mySocket.off("connect", onConnect);
      mySocket.off("disconnect", onDisconnect);
    };
  }, []);

  const joinRoomMessage = (idRoom: string) => {
    mySocket.emit(EVENTS.CLIENT.JOIN_ROOM, idRoom);
  };

  return { mySocket, joinRoomMessage };
}
