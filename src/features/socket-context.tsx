import React, { createContext } from "react";
import io, { Socket } from "socket.io-client";

export const SocketContext = createContext<Socket | null>(null);

const socket: Socket = io(
  "https://stormy-glove-79c.notion.site/ForntEnd1-21e0fb44800e496fb0a64f2e79efb6d5"
);

interface ISocketProviderProps {
  children: React.ReactNode;
}

export default function SocketProvider({ children }: ISocketProviderProps) {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
