import React, { useEffect } from "react";
import logo from "../resources/images/Doctor.svg";
import ConnectingButtons from "./ConnectingButtons";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";

import "./IntroductionPage.css";

const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
  }, []);

  return (
    <div className="main_page_container">
      <img src={logo} className="introduction_page_image"></img>
      <ConnectingButtons />
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapActionsToProps)(IntroductionPage);
