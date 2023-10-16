import React, { useEffect, useState } from "react";
import speaker from "../images/speaker.svg";

const PossibleReply = ({
  possibleReply,
  setOutPossibleReplies,
  RecentChatsId,
  setRecentChatsId,
  translate,
  setEndLesson,
}) => {
  const [showBotMessage, setShowBotMessage] = useState(false);

  const handleReplyClick = () => {
    setRecentChatsId([...RecentChatsId, possibleReply.id]);

    if (possibleReply.next_id.length === 0) {
      setEndLesson(true);
    } else {
      setTimeout(() => {
        setShowBotMessage(true);
      }, 1000);
    }

    setOutPossibleReplies(true);
  };

  useEffect(() => {
    if (showBotMessage) {
      setRecentChatsId([...RecentChatsId, possibleReply.next_id[0]]);
    }
  }, [showBotMessage]);

  return (
    <div className="d-flex align-items-center gap-4">
      <button
        className="bg-primary p-2 rounded-circle border border-3 border-white box-shadow"
        onClick={() => {
          new Audio(possibleReply.sound).play();
        }}
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
          {possibleReply.text}
        </p>
        {translate === 0 && (
          <p
            className={`text-secondary fw-bold ${
              translate === 0 ? "text-secondary" : "text-white"
            }`}
          >
            {possibleReply.translate}
          </p>
        )}
      </div>
    </div>
  );
};

export default PossibleReply;
