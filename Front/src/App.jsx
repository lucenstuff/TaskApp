import { useState } from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen flex bg-neutral-900">
        <div className="w-1/6 h-screen">
          <SidePanel />
        </div>
        <div className="w-5/6">
          <MainPanel />
        </div>
      </div>
    </>
  );
}

export default App;
