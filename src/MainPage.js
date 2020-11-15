import React, { Component } from "react";
import Navbar from "./Navbar";
import View from "./View";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intputText1: "",
      inputText2: "",
    };
  }
  handleChange1 = (e) => {
    this.setState({
      inputText1: e.target.value,
    });
  };

  handleChange2 = (e) => {
    this.setState({
      inputText2: e.target.value,
    });
  };

  render() {
    const { inputText1, inputText2 } = this.state;
    // console.log("text1", inputText1);
    // console.log("text2", inputText2);
    return (
      <div className="main-page">
        <Navbar
          handleChange1={this.handleChange1}
          handleChange2={this.handleChange2}
        />
        <div className="view-box">
          <View inputText1={inputText1} inputText2={inputText2} />
          {/* <View inputText2={inputText2} /> */}
        </div>
      </div>
    );
  }
}

export default MainPage;
