import React, { useState, useEffect } from "react";

import PossibleReply from "./PossibleReply";
import SwitchButton from "./SwitchButton";

const PossibleReplies = ({
  chat,
  possibleReplyIds,
  audioEnd,
  RecentChatsId,
  setRecentChatsId,
  autoplay,
  setAutoplay,
  translate,
  endLesson,
  setEndLesson,
  setReportModalShow,
  setScroll,
}) => {
  const [outPossibleReplies, setOutPossibleReplies] = useState(false);
  const [possibleReplies, setPossibleReplies] = useState([]);

  useEffect(() => {
    setScroll(true);
    const uniqueIds = new Set(possibleReplyIds);

    const filteredReplies = chat.filter(
      (message) => uniqueIds.has(message.id) && !message.is_bot
    );

    // Update the state using the setPossibleReplies function
    setPossibleReplies(filteredReplies);
    setOutPossibleReplies(false);

    if (possibleReplyIds.length === 0) {
      setEndLesson(true);
    }
  }, [
    chat,
    possibleReplyIds,
    setPossibleReplies,
    setOutPossibleReplies,
    setEndLesson,
  ]);

  return (
    <div className="container-fluid box-shadow py-4 bg-white">
      <div className="row justify-content-center">
        <div className="col col-md-8">
          {endLesson && (
            <div className="d-flex align-items-center justify-content-between">
              <a
                onClick={() => {
                  setReportModalShow(true);
                }}
                className="btn btn-light-alt fw-bold fs-4 text-secondary px-4 py-2"
              >
                !
              </a>
              <a
                href="/complate"
                className="btn btn-primary fw-bold text-secondary px-4 py-2"
              >
                End conversation
              </a>
            </div>
          )}
          {!endLesson && (
            <>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold text-secondary fs-5">
                  Possible Replies
                </h4>
                <div className="d-flex gap-1 align-items-end">
                  <span className="text-secondary">Autoplay</span>
                  <SwitchButton
                    onClick={() =>
                      autoplay === 0 ? setAutoplay(1) : setAutoplay(0)
                    }
                  />
                </div>
              </div>
              {audioEnd && (
                <div
                  className={`container d-grid gap-3 mt-2 ${
                    outPossibleReplies
                      ? "out-possible-replies"
                      : "get-possible-replies"
                  }`}
                >
                  {possibleReplies.map((possibleReply) => (
                    <div className="row" key={possibleReply.id}>
                      <PossibleReply
                        possibleReply={possibleReply}
                        setOutPossibleReplies={setOutPossibleReplies}
                        RecentChatsId={RecentChatsId}
                        setRecentChatsId={setRecentChatsId}
                        translate={translate}
                        setEndLesson={setEndLesson}
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PossibleReplies;
