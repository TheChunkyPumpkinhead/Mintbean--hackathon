import "./App.css";
import "./container/Description.css";
import Header from "./container/Header";
import MainContainer from "./container/MainContainer";
import Footer from "./container/Footer";
import Production from "./Game/Production.js";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrap">
        <MainContainer />

        <div className="game-container">{/* <Production/> */}</div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
