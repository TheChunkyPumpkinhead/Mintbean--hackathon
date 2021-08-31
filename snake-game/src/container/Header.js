import React from "react";
import snake from "../Pictures/snake.png";


function Header({state, setState}) {
  
  const playFunction = (e) => {
    e.preventDefault();
    setState({current: 'home'})
  }
  return (
    <div className='header-cont'>
      <img className='logo' src={snake} alt='snake logo' height='100'/> 
      {(state.current === 'game')? <p className='play-text' onClick={e => playFunction(e)}>Home Page</p> : null}     
    </div>
  );
}
export default Header;
