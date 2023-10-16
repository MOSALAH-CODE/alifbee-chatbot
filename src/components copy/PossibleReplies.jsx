import React, { useState, useEffect } from "react";

import PossibleReply from "./PossibleReply";
import SwitchButton from "./SwitchButton";

import data from "../json/bot.json";

const PossibleReplies = ({
  possibleReplyIds,
  setUserChatId,
  setPossibleReplyIds,
  RecentChatsId,
  setRecentChatsId,
  autoplay,
  setAutoplay,
  translate,
}) => {
  const [possibleReplies, setPossibleReplies] = useState([]);

  useEffect(() => {
    const chats = data["chat"];

    // Use a set to keep track of unique IDs
    const uniqueIds = new Set(possibleReplyIds);

    const filteredReplies = chats.filter((chat) => uniqueIds.has(chat.id));

    // Update the state using the setPossibleReplies function
    setPossibleReplies(filteredReplies);
  }, [possibleReplyIds]);

  return (
    <div className="container-fluid position-fixed bottom-0 box-shadow py-4 bg-white">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="fw-bold text-secondary fs-5">Possible Replies</h4>
            <div className="d-flex gap-1 align-items-end">
              <span className="text-secondary">Autoplay</span>
              <SwitchButton
                onClick={() =>
                  autoplay === 0 ? setAutoplay(1) : setAutoplay(0)
                }
              />
            </div>
          </div>
          <div className="container d-grid gap-3 mt-2">
            {possibleReplies.map((possibleReply) => (
              <div className="row" key={possibleReply.id}>
                <PossibleReply
                  id={possibleReply.id}
                  setPossibleReplyIds={setPossibleReplyIds}
                  RecentChatsId={RecentChatsId}
                  setRecentChatsId={setRecentChatsId}
                  translate={translate}
                  arabicText={possibleReply.text}
                  englishText={possibleReply.translate}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PossibleReplies;
