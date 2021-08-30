import React from "react";
import snake from "../Pictures/snake.png";

function Header({ state, setState }) {
  function clickMe(e) {
    setState({ current: "game" });
  }
  return (
    <div className="header-cont">
      <img className="logo" src={snake} alt="snake logo" height="100" />
      <div className="link-cont">
        <p className="link">Description</p>
        <p className="link">Instructions</p>
        <p className="link">Engineers</p>
        <button onClick={(e) => clickMe(e)}>button</button>
      </div>
    </div>
  );
}
export default Header;
