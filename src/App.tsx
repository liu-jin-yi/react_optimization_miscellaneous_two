import React, { useState } from "react";
import "./App.css";
import {
  UseRefOpt,
  UseRefOpt2,
  ProvidersOpt,
  ProvidersOpt2,
} from "./components";
function App() {
  const [boll, setBoll] = useState(true);
  return (
    <div className="App">
      {boll && <UseRefOpt />}
      <button onClick={() => setBoll(!boll)}>toggle</button>
      <UseRefOpt2 />
      <ProvidersOpt />
      <ProvidersOpt2 />
    </div>
  );
}

export default App;
