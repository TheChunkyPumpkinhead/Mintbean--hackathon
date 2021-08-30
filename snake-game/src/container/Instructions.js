import React from 'react';
import arrows from '../Pictures/arrows.png';
import dots from '../Pictures/dot.png';
import apple from '../Pictures/apple.png';
import skull from '../Pictures/skull.png';

export const Instructions = () => {

    return(
        <div className='instructions-cont'>
            <div className='instruction-sec' id='inst-sec4'>
                <img src={arrows} alt='extra-content' height='50'/>
                <p>Use the arrows on your keyboard to move up, down, left or right!</p>
            </div>
            <div className='instruction-sec' id='inst-sec5'>
                <img src={apple} alt='extra-content' height='50'/>
                <p>Eat as many apples as you can!</p>
            </div>
            <div className='instruction-sec' id='inst-sec5'>
                <img src={skull} alt='extra-content' height='50'/>
                <p>Avoid the walls and any part of your body or its game over.</p>
            </div>  
        </div>
    )
}