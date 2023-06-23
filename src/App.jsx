import "./App.css";
import { useState, useEffect } from "react";

import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Tournaments from "./pages/Tournaments";
import Team from "./pages/Team";
import Footer from "./pages/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Home />
          <About />
          <Tournaments />
          <Team />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
