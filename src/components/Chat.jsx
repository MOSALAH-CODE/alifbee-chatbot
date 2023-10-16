import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

const Chat = ({
  chat,
  setPossibleReplyIds,
  translate,
  RecentChatsId,
  setRecentChatsId,
  setAudioEnd,
  scroll,
  setScroll,
}) => {
  const [recentChats, setRecentChats] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    setRecentChats(
      RecentChatsId.map((id) => chat.find((message) => message.id === id))
    );
  }, [chat, RecentChatsId, RecentChatsId.length, setRecentChats]);

  useEffect(() => {
    if (RecentChatsId.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
    setScroll(false);
  }, [RecentChatsId.length, scroll]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col col-md-8 d-grid gap-3 mt-5">
          {recentChats.map((message) => (
            <ChatMessage
              message={message}
              setPossibleReplyIds={setPossibleReplyIds}
              translate={translate}
              setAudioEnd={setAudioEnd}
              RecentChatsId={RecentChatsId}
              setRecentChatsId={setRecentChatsId}
              setScroll={setScroll}
            />
          ))}
          <div ref={ref} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
