import React from "react";
import ConnectingButton from "./ConnectingButton";
import { useHistory } from "react-router-dom";

const ConnectingButtons = () => {
  let history = useHistory();

  const pushToJoinRoomPage = () => {
    history.push("/join-room");
  };

  const pushToJoinRoomPageAsHost = () => {
    history.push("/join-room?host=true");
  };

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
    <div className="connecting_buttons_container">
      <img className="round" src="https://img.icons8.com/office/80/undefined/person-male.png"/>
      <br></br>
      <ConnectingButton
        buttonText="Join a meeting"
        onClickHandler={pushToJoinRoomPage}
      />
    </div>
      </div>
      <div className="introduction_page_panel">
    <div className="connecting_buttons_container">
      <img className="round" src="https://img.icons8.com/office/80/undefined/doctor-female.png"/>
      <br></br>
      <ConnectingButton
        createRoomButton
        buttonText="Host a meeting"
        onClickHandler={pushToJoinRoomPageAsHost}
      />
    </div>
      </div>
      </div>
  );
};

export default ConnectingButtons;
