import React, { useState } from "react";
import Loader from "./Components/Loader"; 
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="bg-zinc-900 w-screen h-screen">
          <Home />
          <Project />
          <About />
        </div>
      )}
    </>
  );
}

export default App;
