import SidePanel from "./components/SidePanel";
import MainPanel from "./pages/MainPanel";

function App() {
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
