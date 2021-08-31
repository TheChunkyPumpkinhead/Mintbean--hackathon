import "./App.css";
import "./container/Description.css";
import Header from "./container/Header";
import MainContainer from "./container/MainContainer";
import Footer from "./container/Footer";
import Production from "./Game/Production.js";
import { useState } from 'react';

function App() {

  const [state, setState] = useState({current: "home"});
  return (
    <div className="app-container">
      <Header state={state} setState={setState} />
      <div className="content-wrap">
        {(state.current === "home")? 
          <MainContainer state={state} setState={setState}/>
        :
          <Production/>
        }
      </div>
      <Footer />
    </div>
  );
}
export default App;
