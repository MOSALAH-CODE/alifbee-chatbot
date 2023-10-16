import React, { useState, useEffect } from "react";
import speaker from "../images/speaker.svg";
import data from "../json/bot.json";

const PossibleReply = ({
  id,
  setPossibleReplyIds,
  RecentChatsId,
  setRecentChatsId,
  translate,
  arabicText,
  englishText,
}) => {
  const [showBotMessage, setShowBotMessage] = useState(false);
  const chats = data["chat"];
  const selectedReply = chats.find((chat) => chat.id === id);
  const handleReplyClick = () => {
    setRecentChatsId([...RecentChatsId, id]);

    setTimeout(() => {
      setShowBotMessage(true);
    }, 1000);
  };

  if (showBotMessage) {
    setRecentChatsId([...RecentChatsId, selectedReply.next_id[0]]);
    const reply = chats.find((chat) => chat.id === selectedReply.next_id[0]);
    setPossibleReplyIds(reply.next_id);
  }

  return (
    <div className="d-flex align-items-center gap-4">
      <button
        className="bg-primary p-2 rounded-circle border border-3 border-white box-shadow"
        style={{ height: "48px", width: "48px" }}
      >
        <img src={speaker} alt="speaker" />
      </button>
      <div
        className="py-2 px-3 box-shadow w-100 rounded rounded-3"
        onClick={handleReplyClick}
        style={{ cursor: "pointer" }}
      >
        <p className={"text-end font-face-sakkal text-secondary"}>
          {arabicText}
        </p>
        {translate === 0 && (
          <p
            className={`text-secondary fw-bold ${
              translate === 0 ? "text-secondary" : "text-white"
            }`}
          >
            {englishText}
          </p>
        )}
      </div>
    </div>
  );
};

export default PossibleReply;
