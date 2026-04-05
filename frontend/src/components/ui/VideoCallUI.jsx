import {
  CallControls,
  CallingState,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Loader2Icon, MessageSquareIcon, UsersIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Channel,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

const VideoCallUI = ({ chatClient, channel }) => {
  const navigate = useNavigate();
  const { useCallCallingState, useParticipantCount } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (callingState === CallingState.JOINING) {
    return (
      <div className="h-full flex items-center justify-center bg-base-200">
        <div className="text-center">
          <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
          <p className="text-lg font-medium">Joining call...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex relative str-video overflow-hidden">
      <div className="flex-1 flex flex-col gap-3 p-3">
        <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-base-100/70 backdrop-blur-md shadow-md border border-base-300">
          <div className="flex items-center gap-3">
            <UsersIcon className="w-5 h-5 text-primary" />
            <span className="font-medium">
              {participantCount}{" "}
              {participantCount === 1 ? "participant" : "participants"}
            </span>

            <span className="badge badge-success animate-pulse text-xs">
              Live
            </span>
          </div>

          {chatClient && channel && (
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={`btn btn-sm gap-2 transition-all duration-200 ${
                isChatOpen ? "btn-primary scale-105" : "btn-ghost"
              }`}
            >
              <MessageSquareIcon className="size-4" />
              Chat
            </button>
          )}
        </div>

        <div className="flex-1 relative rounded-xl overflow-hidden border border-base-300 shadow-lg bg-base-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
          <SpeakerLayout />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-base-100/80 backdrop-blur-lg px-4 py-2 rounded-full shadow-xl border border-base-300">
            <CallControls onLeave={() => navigate("/app/dashboard")} />
          </div>
        </div>
      </div>

      {chatClient && channel && (
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-[#1e2025] border-l border-[#3a3d44] transform transition-all duration-300 ease-in-out z-30
          ${isChatOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <div className="flex flex-col h-full">
            <div className="p-3 flex items-center justify-between border-b border-[#3a3d44]">
              <h3 className="font-semibold text-white">Session Chat</h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="hover:scale-110 transition"
              >
                <XIcon className="size-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-hidden stream-chat-dark">
              <Chat client={chatClient} theme="str-chat__theme-dark">
                <Channel channel={channel}>
                  <Window>
                    <MessageList />
                    <MessageInput />
                  </Window>
                  <Thread />
                </Channel>
              </Chat>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCallUI;
