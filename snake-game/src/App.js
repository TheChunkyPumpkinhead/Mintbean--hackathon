import "./App.css";
import "./container/Description.css";
import Header from "./container/Header";
import MainContainer from "./container/MainContainer";
import Footer from "./container/Footer";

function App() {
  function clickMe() {
    alert("clicked");
  }
  return (
    <div className="page-container">
      <div>
        <button onClick={clickMe}>button</button>
      </div>

      <div className="content-wrap">
        <Header />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}
export default App;
