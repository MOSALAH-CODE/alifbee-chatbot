import React from "react";

import conversationImg from "../images/conversation.svg";
import * as Icon from "react-bootstrap-icons";

const Home = () => {
  return (
    <div className="App">
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
          <div className="col-6 d-grid gap-4 text-center">
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
                <h3 class="fw-bold text-secondary">Welcome</h3>
                <p className="text-secondary mt-3">
                  Here we will practice conversations together in a smooth and
                  fun way. All you have to do is interact with the questions
                  asked, and you can also take advantage of the translation and
                  autoplay audio.
                </p>
              </div>
            </div>
            <div>
              <a
                href="/chat-bot"
                className="btn btn-primary text-secondary fw-bold py-1 px-4"
              >
                Let’s Start
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
