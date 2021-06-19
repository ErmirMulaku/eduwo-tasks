import React from "react";

import Header from "./partials/Header/Header";
import Footer from "./partials/Footer/Footer";
import Routes from "./routes/Routes";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
