import React from "react";

import StartLessonModal from "./StartLessonModal";
import CloseLessonModal from "./CloseLessonModal";
import ReportLessonModal from "./ReportLessonModal";

function ChatPageModals({
  startModalShow,
  setStartModalShow,
  setLessonShow,
  closeModalShow,
  setCloseModalShow,
  reportModalShow,
  setReportModalShow,
}) {
  return (
    <>
      <StartLessonModal
        show={startModalShow}
        onHide={() => {
          setStartModalShow(false);
          setLessonShow(true);
        }}
      />
      <CloseLessonModal
        show={closeModalShow}
        onHide={() => {
          setCloseModalShow(false);
        }}
      />

      <ReportLessonModal
        show={reportModalShow}
        onHide={() => {
          setReportModalShow(false);
        }}
      />
    </>
  );
}

export default ChatPageModals;
