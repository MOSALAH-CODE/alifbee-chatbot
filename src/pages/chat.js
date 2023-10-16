import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import PossibleReplies from "../components/PossibleReplies";
import Chat from "../components/Chat";
import ChatPageModals from "../components/Modals/ChatPageModals";
import data from "../json/bot.json";

const ChatPage = () => {
  const [chat, setChat] = useState([]);
  const [possibleReplyIds, setPossibleReplyIds] = useState([2, 3, 4]);

  const [translate, setTranslate] = useState(0);
  const [autoplay, setAutoplay] = useState(0);

  const [RecentChatsId, setRecentChatsId] = useState([1]);

  const [audioEnd, setAudioEnd] = useState(false);

  const [startModalShow, setStartModalShow] = useState(true);
  const [closeModalShow, setCloseModalShow] = useState(false);
  const [reportModalShow, setReportModalShow] = useState(false);

  const [lessonShow, setLessonShow] = useState(false);
  const [endLesson, setEndLesson] = useState(false);

  const [loading, setLoading] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setChat(data["chat"]);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [setChat]);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <ChatPageModals
            startModalShow={startModalShow}
            setStartModalShow={setStartModalShow}
            setLessonShow={setLessonShow}
            closeModalShow={closeModalShow}
            setCloseModalShow={setCloseModalShow}
            reportModalShow={reportModalShow}
            setReportModalShow={setReportModalShow}
          />
          {lessonShow && (
            <>
              <NavBar
                translate={translate}
                setTranslate={setTranslate}
                setCloseModalShow={setCloseModalShow}
              />
              <div
                className="container-fluid d-grid align-content-between"
                style={{ height: "100vh" }}
              >
                <div className="row conversation overflow-y-auto">
                  <Chat
                    chat={chat}
                    setPossibleReplyIds={setPossibleReplyIds}
                    translate={translate}
                    RecentChatsId={RecentChatsId}
                    setRecentChatsId={setRecentChatsId}
                    setAudioEnd={setAudioEnd}
                    scroll={scroll}
                    setScroll={setScroll}
                  />
                </div>
                <div className={"row-col-auto"}>
                  <PossibleReplies
                    chat={chat}
                    possibleReplyIds={possibleReplyIds}
                    audioEnd={audioEnd}
                    RecentChatsId={RecentChatsId}
                    setRecentChatsId={setRecentChatsId}
                    autoplay={autoplay}
                    setAutoplay={setAutoplay}
                    translate={translate}
                    endLesson={endLesson}
                    setEndLesson={setEndLesson}
                    setReportModalShow={setReportModalShow}
                    setScroll={setScroll}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ChatPage;
