import React from "react";
import Description from "./Description";
import { Instructions } from "./Instructions";
import Engineers from "./Engineers";
import "../App.css";

const MainContainer = ({ state, setState }) => {
  return (
    <div class="body-cont">
      <Description state={state} setState={setState}/>
      <Instructions />
      <Engineers />
    </div>
  );
};
export default MainContainer;
