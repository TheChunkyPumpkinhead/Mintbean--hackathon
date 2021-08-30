import React from "react";
import snake from '../Pictures/snake.png'

function Header() {
  function clickMe() {
    alert("clicked");
  }

  return (
    <div className='header-cont'>
      <img className='logo' src={snake} alt='snake logo' height='100'/>
      <div className='link-cont'>
        <p className='link' >Description</p>
        <p className='link' >Instructions</p>
        <p className='link' >Engineers</p>
        <button onClick={clickMe}>button</button>
      </div>
    </div>
  );
}
export default Header;
