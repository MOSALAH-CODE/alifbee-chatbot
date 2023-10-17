import React, { useState, useEffect } from "react";
import bee from "../images/bee.svg";
import profile from "../images/profile.svg";
import speaker from "../images/speaker.svg";
import Speaker from "./Speaker";

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
  const [speakerAnimEnd, setSpeakerAnimEnd] = useState(false);

  const audio = new Audio(message.sound);
  const speakerSound = new Audio(message.sound);

  useEffect(() => {
    setScroll(true);

    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    if (message.is_bot) {
      setAudioEnd(false);

      audio.onloadedmetadata = function () {
        setTimeout(() => {
          console.log("sound played");
          audio.play();
        }, 1000);
      };

      audio.onerror = function (error) {
        console.log("error play sound:", error);
      };
    } else {
      setSpeakerAnimEnd(true);
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
        if (!RecentChatsId.find((id) => id === nextMessage.id)) {
          setRecentChatsId([...RecentChatsId, nextMessage.id]);
        }
      } else {
        setPossibleReplyIds(message.next_id);
      }
    }
    setAudioEnd(true);
    setSpeakerAnimEnd(true);
  };

  speakerSound.onended = function () {
    setSpeakerAnimEnd(true);
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
        {speakerAnimEnd ? (
          <button
            className={`position-absolute align-items-center bg-primary border border-2 border-white box-shadow d-flex justify-content-center p-2 rounded-circle ${
              message.is_bot ? "small-speaker" : "small-speaker-reverse"
            }`}
            onClick={() => {
              setSpeakerAnimEnd(false);
              speakerSound.play();
            }}
          >
            <img
              src={speaker}
              alt="speaker"
              style={{ height: "13.5px", width: "13.5px" }}
            />
          </button>
        ) : (
          <div
            className={`position-absolute d-flex align-content-center justify-content-center  ${
              message.is_bot
                ? "small-speaker-anim"
                : "small-speaker-reverse-anim"
            }`}
          >
            <Speaker height={32} width={32} />
          </div>
        )}
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
                } ${speakerAnimEnd ? "" : "scale-text"}`}
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
