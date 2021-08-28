import React from "react";

function Header() {
  function clickMe() {
    alert("clicked");
  }

  return (
    <div>
      <div>
        <button onClick={clickMe}>button</button>
      </div>
    </div>
  );
}
export default Header;
