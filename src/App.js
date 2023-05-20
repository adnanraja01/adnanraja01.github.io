import About from "./components/About";
import Expertise from "./components/Expertise";
import Home from "./components/Home";
import MyPortfolio from "./components/MyPorfolio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="Index_gradient_left"></div>
      <div className="Index_gradient_right"></div>
      <Home />
      <About />
      <Expertise />
      <MyPortfolio />
    </div>
  );
}

export default App;
