import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
        <div className="px-2">
          <img
            src={process.env.PUBLIC_URL + "/images/footer.jpg"}
            width={"100%"}
            height={"600px"}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
