import React, { Component } from "react";
// import Iframe from "react-iframe";
import xFrameBypass from "x-frame-bypass";

class View extends Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
  forceUpdateHandler() {
    this.forceUpdate();
  }

  render() {
    const { inputText1, inputText2 } = this.props;
    console.log("VIEW RENDER");
    console.log("text1", inputText1);
    console.log("text2", inputText2);

    return (
      <>
        {/* <Iframe
          is="x-frame-bypass"
          url="https://www.npmjs.com/package/react-iframe"
          width="500px"
          height="500px"
          id="iframe"
          className="iframe"
          display="initial"
          position="relative"
          overflow-x="scroll"
        /> */}

        <iframe
          //   is="x-frame-bypass"
          src={inputText1}
          id="iframe"
          className="iframe"
          display="initial"
          position="relative"
          title="iframe"
        ></iframe>

        <iframe
          //   is="x-frame-bypass"
          src={inputText2}
          id="iframe"
          className="iframe"
          display="initial"
          position="relative"
          title="iframe"
        ></iframe>
      </>
    );
  }
}

export default View;
