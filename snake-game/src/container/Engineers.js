import React from "react";
import "./Engineers.css";
import jesusPic from '../Pictures/jesus.jpg';
// import chrisPic from '../Pictures/myPic.jpg'

const Description = () => {
  return (
    <div class="flexbox-container">
      <div class="flexbox-item" id="flexbox-item-1">
        <h3>Chris Campos</h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div class="flexbox-item flexbox-item-2">
        <img
          class="item"
          height="100"
          src='../Pictures/myPic.jpg'
          alt="Example"
        />
      </div>
      <div class="flexbox-item flexbox-item-3">
        <h3>Jesus Israel Garcia</h3>
        <p>I just recently graduated from a Software Engineering Program at Flatiron School. This is the toughest program I have ever attended but had the most unique/greatest experience and exposure I've ever had.</p>
      </div>
      <div class="flexbox-item flexbox-item-4">
        <img
          class="item"
          height="100"
          src={jesusPic}
          alt="Example"
        />
      </div>
    </div>
  );
};
export default Description;
