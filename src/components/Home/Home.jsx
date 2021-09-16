import React, { Component } from "react";
import bg from "../../assets/bg.png";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div className="main-container" style={{
          backgroundImage: `url(${bg})`
      }}>
        {/* <h1>SUP YALL ITS ME ITS YA BOI</h1> */}
        {/* <img src={bg} /> */}
      </div>
    );
  }
}

export default Home;
