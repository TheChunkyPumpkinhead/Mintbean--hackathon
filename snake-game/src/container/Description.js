import React from "react";
import './Description.css';
import controller from '../Pictures/controller.png'

const Description = () => {
  return (
    <div class="description-container">
      <div class="description-sec" id='description-sec-1'>
        <img src={controller} alt='control logo' height='100'/>
            <div>
              <p> 
                This snake game was created using a JavaScript and React front end, along with CSS flexbox. Sign In Or Sign Up.  Check out your current stats in the profile section to the left.
                See the game section to the right, can you beat the high schore?! Whenever you are ready to click Start!</p>
            </div>
      </div>
      <div class="description-sec" id='description-sec-2'>
        <iframe className='video'width="560" height="315" src="https://www.youtube.com/embed/9YffrCViTVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};
export default Description;
