import { createContext, useEffect, useState } from "react";
import PageService from "../services/PageService";

export const PageContext = createContext();

export const PageProvider = ({ children, pageId }) => {
  const [selectedPage, setSelectedPage] = useState(null);

  const fetchSelectedPage = async () => {
    try {
      const fetchedSelectedPage = await PageService.getPagebyId(pageId);
      setSelectedPage(fetchedSelectedPage);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (pageId) {
      console.log("Setting selected page to", pageId);
      fetchSelectedPage();
    }
  });

  return (
    <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </PageContext.Provider>
  );
};
