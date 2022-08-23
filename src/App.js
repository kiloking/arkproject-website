import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";

import Modal from "./Components/Modal";
function App() {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />

    </div>
  );
}

export default App;
