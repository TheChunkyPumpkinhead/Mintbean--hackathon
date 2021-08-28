import React from "react";
import "./Engineers.css";
import jesusPic from "../Pictures/jesus.jpg";
import chrisPic from "../Pictures/myPic.jpg";

const Description = () => {
  return (
    <div class="flexbox-container">
      <div class="flexbox-text">
        <h3>Chris Campos</h3>
        <p>
          Howzit! I am excited to be in this extraordinary field and working
          with amazing and talented Developers! I will be a full-stack developer
          with a passion for front-end projects. In my free time hanging out
          with my dog, Paddling, and checking out new Food Joints. Yup, in that
          order!
        </p>
      </div>

      <img class="item" src={chrisPic} alt="Example" />

      <div class="flexbox-item flexbox-item-3">
        <h3>Jesus Israel Garcia</h3>
        <p>
          I just recently graduated from a Software Engineering Program at
          Flatiron School. This is the toughest program I have ever attended but
          had the most unique/greatest experience and exposure I've ever had.
        </p>
      </div>

      <img class="item" src={jesusPic} alt="Example" />
    </div>
  );
};
export default Description;
