import React, { useState, useEffect } from "react";

import conversationImg from "../images/conversation.svg";
import honey from "../images/honey.svg";
import accuracyIcon from "../images/accuracyIcon.svg";
import timerIcon from "../images/timerIcon.svg";

import * as Icon from "react-bootstrap-icons";

const ComplatePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="position-absolute top-0 end-0 p-4">
            <a
              href="/"
              className="d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm"
              style={{
                width: 40,
                height: 40,
              }}
            >
              <Icon.XLg color="rgba(142, 127, 145, 1)" size={24} />
            </a>
          </div>

          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-10 d-grid gap-4 text-center">
                <div>
                  {/* conversation image */}
                  <img
                    src={conversationImg}
                    width="307"
                    height="330"
                    alt="conversation"
                  />

                  {/* Title & Description */}
                  <div className="mt-4">
                    <h3 class="fw-bold text-secondary">Woohoo</h3>
                  </div>
                  <div className="row gap-2 flex-nowrap">
                    <div className="bg-light-alt col-4 d-grid gap-2 justify-content-center px-5 py-3 rounded-3">
                      <div>
                        <img src={honey} alt="honey" />
                      </div>
                      <h4 className="fw-bold m-0">3</h4>
                      <span>Honey drop</span>
                    </div>
                    <div className="bg-primary-alt col-4 d-grid gap-2 justify-content-center px-5 py-3 rounded-3">
                      <div>
                        <img src={accuracyIcon} alt="accuracyIcon" />
                      </div>
                      <h4 className="fw-bold m-0">100%</h4>
                      <span>Accuracy</span>
                    </div>
                    <div className="bg-light-green col-4 d-grid gap-2 justify-content-center px-5 py-3 rounded-3">
                      <div>
                        <img src={timerIcon} alt="timerIcon" />
                      </div>
                      <h4 className="fw-bold m-0">1:00m</h4>
                      <span>Total time</span>
                    </div>
                  </div>
                </div>
                <div>
                  <a
                    href="/"
                    className="btn btn-primary text-secondary fw-bold py-1 px-4"
                  >
                    Continue
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ComplatePage;
