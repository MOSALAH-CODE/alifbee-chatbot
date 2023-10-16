import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";

import data from "../json/bot.json";

const Chat = ({ translate, RecentChatsId }) => {
  const [recentChats, setRecentChats] = useState([]);
  useEffect(() => {
    const chats = data["chat"];

    // Use a set to keep track of unique IDs
    const uniqueIds = new Set(RecentChatsId);

    const filteredReplies = chats.filter((chat) => uniqueIds.has(chat.id));

    setRecentChats(filteredReplies);
  }, [RecentChatsId]);

  return (
    <div className="container container-chat conversation mt-5">
      <div className="chat-cloud-wrapper">
        <div className="chat-container">
          <div className="row justify-content-center">
            <div className="col d-grid gap-3 mt-5">
              {recentChats.map((chat) => (
                <ChatMessage
                  key={chat.id}
                  isBot={chat.is_bot}
                  translate={translate}
                  arabicText={chat.text}
                  englishText={chat.translate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
