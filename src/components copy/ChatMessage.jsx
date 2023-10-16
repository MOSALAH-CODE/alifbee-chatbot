import React, { useState, useEffect } from "react";
import bee from "../images/bee.svg";
import profile from "../images/profile.svg";
import speaker from "../images/speaker.svg";

const ChatMessage = ({ isBot, translate, arabicText, englishText }) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    // Clear the timer when the component unmounts or when showLoading is set to false
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`d-flex ${isBot ? "" : "flex-row-reverse"} gap-4`}>
      <div className="position-relative">
        <div
          className={`rounded-circle border border-3  p-2 shadow ${
            isBot
              ? "bg-primary-darker border-secondary"
              : "bg-sky-blue border-white d-flex justify-content-center align-items-center"
          } `}
          style={{ height: "48px", width: "48px" }}
        >
          <img src={isBot ? bee : profile} />
        </div>
        <button
          className={`position-absolute align-items-center bg-primary border border-2 border-white box-shadow d-flex justify-content-center p-2 rounded-circle ${
            isBot ? "small-speaker" : "small-speaker-reverse"
          }`}
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
            isBot ? "polygon" : "polygon-reverse"
          } `}
        ></div>
        <div
          className={`py-2 px-3 ${
            isBot
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
                  isBot ? "text-white" : "text-secondary"
                }`}
              >
                {arabicText}
              </p>
              {translate === 0 && (
                <p className={isBot ? "text-white" : "text-secondary"}>
                  {englishText}
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
