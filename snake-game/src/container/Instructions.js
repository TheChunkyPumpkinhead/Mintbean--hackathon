import React from 'react';
import dots from '../Pictures/dot.png';

export const Instructions = () => {

    return(
        <div className='instructions-cont'>
            <div className='instruction-sec' id='inst-sec1'>
                <img src={dots} alt='extra-content' height='50'/>
                <p>Sign In Or Sign Up</p>
            </div>
            <div className='instruction-sec' id='inst-sec2'>
                <img src={dots} alt='extra-content' height='50'/>
                <p>Check out your current stats in the profile section to the left.</p>
            </div>
            <div className='instruction-sec' id='inst-sec3'>
                <img src={dots} alt='extra-content' height='50'/>
                <p>See the game section to the right, whenever you are ready to play, click Start!</p>
            </div>
            <div className='instruction-sec' id='inst-sec4'>
                <img src={dots} alt='extra-content' height='50'/>
                <p>Use the arrows on your keyboard to move up, down, left or right!</p>
            </div>
            <div className='instruction-sec' id='inst-sec5'>
                <img src={dots} alt='extra-content' height='50'/>
                <p>Eat as much food as you can!</p>
            </div>
            <div className='instruction-sec' id='inst-sec5'>
                <img src={dots} alt='extra-content' height='50'/>
                <p>Avoid the walls and any part of your body or its game over.</p>
            </div>  
        </div>
    )
}