import React from "react";
import { useChatStore } from "./../store/useChatStore";
import Sidebar from "./../components/Sidebar";
import NoChatSelected from "./../components/NoChatSelected";
import ChatContainer from "./../components/ChatCountainer";

export default function HomePage() {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-base-200">
      <div className="flex items-center justify-center px-4 py-6">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl  h-[calc(100vh-4rem-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
}
