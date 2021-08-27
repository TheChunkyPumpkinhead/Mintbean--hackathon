import React from 'react';

export const Instructions = () => {

    return(
        <div className='instructions-cont'>
            <div className='instruc-sec' id='inst-sec1'>
                <p>Sign In Or Sign Up</p>
            </div>
            <div className='instruc-sec' id='inst-sec2'>
                <p>Check out your current stats in the profile section to the left.</p>
            </div>
            <div className='instruc-sec' id='inst-sec3'>
                <p>See the game section to the right, whenever you are ready to play, click Start!</p>
            </div>
            <div className='instruc-sec' id='inst-sec4'>
                <p>Use the arrows on your keyboard to move up, down, left or right!</p>
            </div>
            <div>
                <p>Eat as much food as you can!</p>
            </div>
        </div>
    )
}