import React from "react";
import Description from "./Description";
import { Instructions } from "./Instructions";
import Engineers from "./Engineers";
import "../App.css";

const MainContainer = () => {
  return (
    <div class="background">
      <Description />
      <Instructions />
      <Engineers />
    </div>
  );
};
export default MainContainer;
