import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  return <h1>AAA</h1>;
};

const Genres = () => {
  return <h1>BBB</h1>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
