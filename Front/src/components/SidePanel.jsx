import { Search, EllipsisVertical, CirclePlus } from "lucide-react";
import PageService from "../services/PageService";
import SideBarPage from "./ui/SideBarPage";
import { useEffect, useState } from "react";

function SidePanel() {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const fetchedPages = await PageService.getPages();
        setPages(fetchedPages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPages();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-neutral-800 text-neutral-200 px-6 py-6 drop-shadow-xl">
      <div className="flex justify-between items-start">
        <div className="flex items-end gap-4 mb-6">
          <img
            className="rounded-xl object-cover w-9 h-9 "
            src="https://www.rollingstone.com/wp-content/uploads/2019/05/tame-impala-lead-photo.jpg?w=1581&h=1054&crop=1"
            alt="avatar"
          />
          <span className="text-lg font-bold">John Doe</span>
        </div>
        <button>
          <EllipsisVertical />
        </button>
      </div>
      <div className="flex gap-4 flex-col">
        <div className="flex gap-2 items-center">
          <Search size={20} />
          <span>Buscar</span>
        </div>
        <div className="flex gap-2 items-center">
          <CirclePlus size={20} />
          <span>Nueva Página</span>
        </div>
      </div>
      <div className="w-full bg-neutral-600 h-0.5 my-6"></div>
      {pages &&
        pages.map((page) => (
          <SideBarPage
            key={page.id}
            pageId={page.id}
            name={page.name}
            progress={page.progress}
          />
        ))}
      <div className="w-full bg-neutral-600 h-0.5 my-2"></div>
      <div className="flex-grow"></div>
      <div className="flex justify-center pb-6"></div>
    </div>
  );
}

export default SidePanel;
