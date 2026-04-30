import { createContext, useContext, useState, useEffect } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(window.innerWidth >= 999);

  const toggleMenu = () => setMenu(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 999) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MenuContext.Provider value={{ menu, toggleMenu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);