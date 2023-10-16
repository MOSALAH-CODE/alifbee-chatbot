import React, { useEffect, useState } from "react";
import speaker from "../images/speaker.svg";
import Speaker from "./Speaker";

const PossibleReply = ({
  possibleReply,
  setOutPossibleReplies,
  RecentChatsId,
  setRecentChatsId,
  translate,
  setEndLesson,
}) => {
  const [showBotMessage, setShowBotMessage] = useState(false);
  const [speakerAnimEnd, setSpeakerAnimEnd] = useState(true);

  const audio = new Audio(possibleReply.sound);

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

  audio.onended = function () {
    setSpeakerAnimEnd(true);
  };
  return (
    <div className="d-flex align-items-center gap-4">
      <div>
        {speakerAnimEnd ? (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "55px", width: "55px" }}
          >
            <button
              className="bg-primary p-2 rounded-circle border border-3 border-white box-shadow"
              onClick={() => {
                setSpeakerAnimEnd(false);
                audio.play();
              }}
              style={{ height: "48px", width: "48px" }}
            >
              <img src={speaker} alt="speaker" />
            </button>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center">
            <Speaker height={55} width={55} />
          </div>
        )}
      </div>

      <div
        className={`py-2 px-3 w-100 rounded rounded-3 ${
          speakerAnimEnd ? "box-shadow" : "box-shadow-primary"
        }`}
        onClick={handleReplyClick}
        style={{ cursor: "pointer" }}
      >
        <p
          className={`text-end font-face-sakkal text-secondary  ${
            speakerAnimEnd ? "" : "scale-text"
          }`}
        >
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
