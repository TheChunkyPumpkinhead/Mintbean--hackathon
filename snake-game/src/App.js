import "./App.css";
import "./container/Description.css";
import Header from "./container/Header";
import MainContainer from "./container/MainContainer";
import Footer from "./container/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrap">
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}
export default App;
