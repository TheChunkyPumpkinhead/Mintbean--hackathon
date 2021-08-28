import React from "react";
//  import myPic from "./Pictures/myPic.jpg";

const Description = () => {
  return (
    <div class="flexbox-container">
      <div class="flexbox-item flexbox-item-1">
        <h3>Chris Campos</h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div class="flexbox-item flexbox-item-2">Picture</div>
      <div class="flexbox-item flexbox-item-3">
        <h3>Jesus Israel Garcia</h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div class="flexbox-item flexbox-item-4">
        <img
          class="item"
          height="50"
          src="./Pictures/myPic.jpg"
          alt="Example"
        />
      </div>
    </div>
  );
};
export default Description;
