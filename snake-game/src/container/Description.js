import React from "react";
import './Description.css';
import controller from '../Pictures/controller.png'

const Description = ({ state, setState }) => {

  const playFunction = (e) => {
    e.preventDefault();
    setState({current: "game"});
  }

  return (
    <div class="description-container">
      <div class="description-sec" id='description-sec-1'>
        <img src={controller} alt='control logo' height='100'/>
            <div className='description-text'>
              <p> 
                This snake game was created using a JavaScript and React front end, along with CSS flexbox. Sign In Or Sign Up.  Check out your current stats in the profile section to the left.
                See the game section to the right, can you beat the high schore?! Whenever you are ready to click Start!
              </p>
              <p className='play-text' onClick={e => playFunction(e)}>
                Play Game!
              </p>
            </div>
      </div>
      <div class="description-sec" id='description-sec-2'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IUorjwUIClU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};
export default Description;
