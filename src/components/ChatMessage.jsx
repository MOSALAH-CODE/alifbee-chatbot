import React, { useState, useEffect } from "react";
import bee from "../images/bee.svg";
import profile from "../images/profile.svg";
import speaker from "../images/speaker.svg";

import data from "../json/bot.json";

const ChatMessage = ({
  message,
  setPossibleReplyIds,
  translate,
  setAudioEnd,
  RecentChatsId,
  setRecentChatsId,
  setScroll,
}) => {
  const [showLoading, setShowLoading] = useState(true);

  const audio = new Audio(message.sound);

  useEffect(() => {
    setScroll(true);

    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    if (message.is_bot) {
      setAudioEnd(false);

      setTimeout(() => {
        audio.play();
      }, 1000);
    }

    // Clear the timer when the component unmounts or when showLoading is set to false
    return () => clearTimeout(timer);
  }, [setShowLoading, setAudioEnd, message.is_bot]);

  audio.onended = function () {
    if (message.is_bot) {
      const nextMessage = data["chat"].find(
        (_message) => _message.id === message.next_id[0]
      );

      if (nextMessage.is_bot) {
        setRecentChatsId([...RecentChatsId, nextMessage.id]);
      } else {
        setPossibleReplyIds(message.next_id);
      }
    }
    setAudioEnd(true);
  };

  return (
    <div className={`d-flex ${message.is_bot ? "" : "flex-row-reverse"} gap-4`}>
      <div className="position-relative">
        <div
          className={`rounded-circle border border-3  p-2 shadow ${
            message.is_bot
              ? "bg-primary-darker border-secondary"
              : "bg-sky-blue border-white d-flex justify-content-center align-items-center"
          } `}
          style={{ height: "48px", width: "48px" }}
        >
          <img src={message.is_bot ? bee : profile} />
        </div>
        <button
          className={`position-absolute align-items-center bg-primary border border-2 border-white box-shadow d-flex justify-content-center p-2 rounded-circle ${
            message.is_bot ? "small-speaker" : "small-speaker-reverse"
          }`}
          onClick={() => {
            new Audio(message.sound).play();
          }}
        >
          <img
            src={speaker}
            alt="speaker"
            style={{ height: "13.5px", width: "13.5px" }}
          />
        </button>
      </div>
      <div className="d-flex position-relative">
        <div
          className={`position-absolute ${
            message.is_bot ? "polygon" : "polygon-reverse"
          } `}
        ></div>
        <div
          className={`py-2 px-3 ${
            message.is_bot
              ? "chat-box bg-secondary text-white"
              : "chat-box-reverse bg-white text-secondary"
          } box-shadow`}
        >
          {showLoading && (
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          {!showLoading && (
            <>
              <p
                className={`text-end font-face-sakkal ${
                  message.is_bot ? "text-white" : "text-secondary"
                }`}
              >
                {message.text}
              </p>
              {translate === 0 && (
                <p className={message.is_bot ? "text-white" : "text-secondary"}>
                  {message.translate}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
