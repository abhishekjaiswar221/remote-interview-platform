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
    <div className="h-full flex gap-3 relative str-video">
      <div className="flex-1 flex flex-col gap-3 p-3 transition-all duration-300">
        <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-base-100/70 backdrop-blur-md shadow border border-base-300">
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
              className={`btn btn-sm gap-2 transition-all ${
                isChatOpen ? "btn-primary" : "btn-ghost"
              }`}
            >
              <MessageSquareIcon className="size-4" />
              Chat
            </button>
          )}
        </div>

        <div className="flex-1 relative rounded-xl overflow-hidden border border-base-300 shadow bg-base-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
          <SpeakerLayout />
        </div>

        <div className="flex justify-center">
          <div className="bg-base-100/80 backdrop-blur px-4 py-2 rounded-full shadow border border-base-300">
            <CallControls onLeave={() => navigate("/app/dashboard")} />
          </div>
        </div>
      </div>

      {chatClient && channel && (
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden
          ${isChatOpen ? "w-80 opacity-100" : "w-0 opacity-0"}`}
        >
          <div className="h-full w-80 flex flex-col rounded-xl shadow bg-[#1e2025] border border-[#3a3d44]">
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
