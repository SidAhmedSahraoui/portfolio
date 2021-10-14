import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Dev from "./components/Dev";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Dev />
      <Footer />
    </div>
  );
}

export default App;
