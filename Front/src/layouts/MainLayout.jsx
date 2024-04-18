import SidePanel from "../components/SidePanel";
import { PageProvider } from "../context/PageContext";
import { TaskProvider } from "../context/TaskContext";
import MainPanel from "../pages/MainPanel";

const MainLayout = () => {
  return (
    <PageProvider>
      <TaskProvider>
        <div className="w-full h-screen flex bg-neutral-900">
          <div className="w-64">
            <SidePanel />
          </div>
          <MainPanel className="flex-grow" />
        </div>
      </TaskProvider>
    </PageProvider>
  );
};

export default MainLayout;
