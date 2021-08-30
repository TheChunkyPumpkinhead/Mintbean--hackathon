import "./App.css";
import "./container/Description.css";
import Header from "./container/Header";
import MainContainer from "./container/MainContainer";
import Footer from "./container/Footer";
import Production from "./Game/Production.js";
import { useState } from "react";

function App() {
  const [state, setstate] = useState({ current: "home" });
  return (
    <div className="app-container">
      <Header setState={setstate} state={state} />
      <div className="content-wrap">
        {state.current === "home" ? <MainContainer /> : <Production />}
      </div>
      <Footer />
    </div>
  );
}
export default App;
