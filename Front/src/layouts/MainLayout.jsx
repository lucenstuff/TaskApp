import SidePanel from "../components/SidePanel";
import { PageProvider } from "../context/PageContext";
import { TaskProvider } from "../context/TaskContext";
import MainPanel from "../pages/MainPanel";

const MainLayout = () => {
  return (
    <PageProvider>
      <TaskProvider>
        <div className="w-full h-screen flex bg-neutral-900">
          <div className="w-1/6 h-screen">
            <SidePanel />
          </div>
          <div className="w-5/6">
            <MainPanel />
          </div>
        </div>
      </TaskProvider>
    </PageProvider>
  );
};

export default MainLayout;
