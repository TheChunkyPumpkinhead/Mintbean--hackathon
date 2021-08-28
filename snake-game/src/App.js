import "./App.css";
import "./container/Description.css";
import Header from "./container/Header";
import MainContainer from "./container/MainContainer";

function App() {
  return (
    <div className='app-container'>
      <Header />
      <MainContainer />
      <footer>Snake game created by Jesus and Chris</footer>
    </div>
  );
}

export default App;
